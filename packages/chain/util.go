package chain

import (
	"runtime"
	"strconv"

	"github.com/iotaledger/goshimmer/packages/ledgerstate"
	"github.com/iotaledger/hive.go/logger"
	"github.com/iotaledger/wasp/packages/hashing"
	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/publisher"
)

// LogStateTransition also used in testing
func LogStateTransition(msg *ChainTransitionEventData, reqids []iscp.RequestID, log *logger.Logger) {
	if msg.ChainOutput.GetStateIndex() > 0 {
		log.Infof("STATE TRANSITION TO #%d. requests: %d, chain output: %s",
			msg.VirtualState.BlockIndex(), len(reqids), iscp.OID(msg.ChainOutput.ID()))

		log.Infof("================= STATE TRANSITION TO #%d. goroutines: %d",
			msg.VirtualState.BlockIndex(), runtime.NumGoroutine())

		log.Debugf("STATE TRANSITION. State hash: %s",
			msg.VirtualState.Hash().String())
	} else {
		log.Infof("ORIGIN STATE SAVED. State output id: %s", iscp.OID(msg.ChainOutput.ID()))
		log.Debugf("ORIGIN STATE SAVED. state hash: %s",
			msg.VirtualState.Hash().String())
	}
}

// LogGovernanceTransition
func LogGovernanceTransition(msg *ChainTransitionEventData, log *logger.Logger) {
	stateHash, _ := hashing.HashValueFromBytes(msg.ChainOutput.GetStateData())
	log.Infof("GOVERNANCE TRANSITION state index #%d, anchor output: %s, state hash: %s",
		msg.VirtualState.BlockIndex(), iscp.OID(msg.ChainOutput.ID()), stateHash.String())
}

func LogSyncedEvent(outputID ledgerstate.OutputID, blockIndex uint32, log *logger.Logger) {
	log.Infof("EVENT: state was synced to block index #%d, approving output: %s", blockIndex, iscp.OID(outputID))
}

func PublishRequestsSettled(chainID *iscp.ChainID, stateIndex uint32, reqids []iscp.RequestID) {
	for _, reqid := range reqids {
		publisher.Publish("request_out",
			chainID.String(),
			reqid.String(),
			strconv.Itoa(int(stateIndex)),
			strconv.Itoa(len(reqids)),
		)
	}
}

func PublishStateTransition(chainID *iscp.ChainID, stateOutput *ledgerstate.AliasOutput, reqIDsLength int) {
	stateHash, _ := hashing.HashValueFromBytes(stateOutput.GetStateData())

	publisher.Publish("state",
		chainID.String(),
		strconv.Itoa(int(stateOutput.GetStateIndex())),
		strconv.Itoa(reqIDsLength),
		iscp.OID(stateOutput.ID()),
		stateHash.String(),
	)
}

func PublishGovernanceTransition(stateOutput *ledgerstate.AliasOutput) {
	stateHash, _ := hashing.HashValueFromBytes(stateOutput.GetStateData())
	chainID := iscp.NewChainID(stateOutput.GetAliasAddress())

	publisher.Publish("rotate",
		chainID.String(),
		strconv.Itoa(int(stateOutput.GetStateIndex())),
		iscp.OID(stateOutput.ID()),
		stateHash.String(),
	)
}
