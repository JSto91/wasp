package wasptest2

import (
	"crypto/rand"
	"fmt"
	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/address"
	"github.com/iotaledger/goshimmer/dapps/valuetransfers/packages/balance"
	waspapi "github.com/iotaledger/wasp/packages/apilib"
	"github.com/iotaledger/wasp/packages/hashing"
	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/testutil"
	"github.com/iotaledger/wasp/packages/vm/examples/inccounter"
	"github.com/iotaledger/wasp/packages/vm/vmconst"
	"github.com/mr-tron/base58"
	"os"
	"testing"
	"time"
)

const noRequests = 3

func TestKillNode(t *testing.T) {
	var seed [32]byte
	rand.Read(seed[:])
	seed58 := base58.Encode(seed[:])
	wallet1 := testutil.NewWallet(seed58)
	scOwner = wallet1.WithIndex(0)

	// setup
	wasps := setup(t, "test_cluster2", "TestKillNode")

	programHash, err := hashing.HashValueFromBase58(inccounter.ProgramHash)
	check(err, t)

	scOwnerAddr := scOwner.Address()
	err = wasps.NodeClient.RequestFunds(&scOwnerAddr)
	check(err, t)

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount,
	}, "sc owner in the beginning") {
		t.Fail()
		return
	}

	scAddr, scColor, err := waspapi.CreateSC(waspapi.CreateSCParams{
		Node:                  wasps.NodeClient,
		CommitteeApiHosts:     wasps.ApiHosts(),
		CommitteePeeringHosts: wasps.PeeringHosts(),
		N:                     4,
		T:                     3,
		OwnerSigScheme:        scOwner.SigScheme(),
		ProgramHash:           programHash,
		Textout:               os.Stdout,
		Prefix:                "[deploy] ",
	})
	checkSuccess(err, t, "smart contract has been created")

	err = waspapi.ActivateSCMulti(waspapi.ActivateSCParams{
		Addresses:         []*address.Address{scAddr},
		ApiHosts:          wasps.ApiHosts(),
		WaitForCompletion: true,
		PublisherHosts:    wasps.PublisherHosts(),
		Timeout:           20 * time.Second,
	})
	checkSuccess(err, t, "smart contract has been activated and initialized")

	wasps.StopNode(3)

	for i := 0; i < noRequests; i++ {
		_, err = waspapi.CreateRequestTransaction(waspapi.CreateRequestTransactionParams{
			NodeClient:      wasps.NodeClient,
			SenderSigScheme: scOwner.SigScheme(),
			BlockParams: []waspapi.RequestBlockParams{
				{
					TargetSCAddress: scAddr,
					RequestCode:     inccounter.RequestInc,
				},
			},
			Post:                true,
			WaitForConfirmation: true,
			WaitForCompletion:   true,
			PublisherHosts:      wasps.ActivePublisherHosts(),
			Timeout:             20 * time.Second,
		})
		checkSuccess(err, t, fmt.Sprintf("request #%d has been sent and completed", i))
	}

	if !wasps.VerifyAddressBalances(scOwnerAddr, testutil.RequestFundsAmount-1, map[balance.Color]int64{
		balance.ColorIOTA: testutil.RequestFundsAmount - 1,
	}, "sc owner in the end") {
		t.Fail()
		return
	}

	if !wasps.VerifyAddressBalances(*scAddr, 1, map[balance.Color]int64{
		*scColor: 1,
	}, "sc in the end") {
		t.Fail()
		return
	}

	ph, err := hashing.HashValueFromBase58(inccounter.ProgramHash)
	check(err, t)

	if !wasps.VerifySCStateVariables2(scAddr, map[kv.Key]interface{}{
		vmconst.VarNameOwnerAddress: scOwnerAddr[:],
		vmconst.VarNameProgramHash:  ph[:],
		inccounter.VarCounter:       noRequests,
	}) {
		t.Fail()
	}
}

//
//func TestKillNodeOld(t *testing.T) {
//	wasps := setup(t, "test_cluster", "TestKillNode")
//
//	sc := &wasps.SmartContractConfig[2]
//
//	_, err := wasptest.PutBootupRecord(wasps, sc)
//	wasptest.check(err, t)
//
//	err = wasptest.Activate1SC(wasps, sc)
//	wasptest.check(err, t)
//
//	err = wasptest.CreateOrigin1SC(wasps, sc)
//	wasptest.check(err, t)
//
//	wasps.StopNode(3)
//
//	scAddress := sc.SCAddress()
//
//	_, err = waspapi.RunAndWaitForRequestProcessedMulti(wasps.ActiveApiHosts(), &scAddress, 0, 30*time.Second, func() (*sctransaction.Transaction, error) {
//		return waspapi.CreateSimpleRequestOld(wasps.NodeClient, sc.OwnerSigScheme(), waspapi.CreateSimpleRequestParamsOld{
//			SCAddress:   &scAddress,
//			RequestCode: inccounter.RequestInc,
//		})
//	})
//	wasptest.check(err, t)
//
//	if !wasps.VerifyAddressBalances(scAddress, 1, map[balance.Color]int64{
//		balance.ColorIOTA: 0,
//		sc.GetColor():     1,
//	}) {
//		t.Fail()
//	}
//
//	if !wasps.VerifySCState(sc, 2, map[kv.Key][]byte{
//		"counter":                   util.Uint64To8Bytes(uint64(1)),
//		vmconst.VarNameOwnerAddress: sc.GetColor().Bytes(),
//	}) {
//		t.Fail()
//	}
//}