package snapshot

import (
	"fmt"
	"github.com/iotaledger/wasp/packages/iscp"
	"github.com/iotaledger/wasp/packages/iscp/coreutil"
	"github.com/iotaledger/wasp/packages/kv"
	"github.com/iotaledger/wasp/packages/kv/codec"
	"github.com/iotaledger/wasp/packages/state"
	"github.com/iotaledger/wasp/packages/util"
	"golang.org/x/xerrors"
	"io"
	"path"
	"time"
)

type ConsoleReportParams struct {
	Console           io.Writer
	StatsEveryKVPairs int
}

func SnapshotFileName(chainID *iscp.ChainID, stateIndex uint32) string {
	return fmt.Sprintf("%s.%d.snapshot", chainID, stateIndex)
}

// WriteKVToStream dumps k/v pairs of the state into the
// file. Keys are not sorted, so the result in general is not deterministic
func WriteKVToStream(store kv.KVIterator, stream kv.StreamWriter, p ...ConsoleReportParams) error {
	par := ConsoleReportParams{
		Console:           io.Discard,
		StatsEveryKVPairs: 100,
	}
	if len(p) > 0 {
		par = p[0]
	}
	var err, errW error
	err = store.Iterate("", func(k kv.Key, v []byte) bool {
		if errW = stream.Write([]byte(k), v); errW != nil {
			return false
		}
		if par.StatsEveryKVPairs > 0 {
			kvCount, bCount := stream.Stats()
			if kvCount%par.StatsEveryKVPairs == 0 {
				fmt.Fprintf(par.Console, "[WriteKVToStream] k/v pairs: %d, bytes: %d\n", kvCount, bCount)
			}
		}
		return errW == nil
	})
	if err != nil {
		fmt.Fprintf(par.Console, "[WriteKVToStream] error while reading: %v\n", err)
		return err
	}
	if errW != nil {
		fmt.Fprintf(par.Console, "[WriteKVToStream] error while writing: %v\n", err)
		return errW
	}
	return nil
}

func WriteSnapshot(ordr state.OptimisticStateReader, dir string, p ...ConsoleReportParams) error {
	par := ConsoleReportParams{
		Console:           io.Discard,
		StatsEveryKVPairs: 100,
	}
	if len(p) > 0 {
		par = p[0]
	}
	chainID, err := ordr.ChainID()
	if err != nil {
		return err
	}
	stateIndex, err := ordr.BlockIndex()
	if err != nil {
		return err
	}
	timestamp, err := ordr.Timestamp()
	if err != nil {
		return err
	}
	fmt.Fprintf(par.Console, "[WriteSnapshot] chainID:     %s\n", chainID)
	fmt.Fprintf(par.Console, "[WriteSnapshot] state index: %d\n", stateIndex)
	fmt.Fprintf(par.Console, "[WriteSnapshot] timestamp: %v\n", timestamp)
	fname := path.Join(dir, SnapshotFileName(chainID, stateIndex))
	fmt.Fprintf(par.Console, "[WriteSnapshot] will be writing to file: %s\n", fname)

	fstream, err := kv.CreateKVStreamFile(fname)
	if err != nil {
		return err
	}
	defer fstream.File.Close()

	if err = WriteKVToStream(ordr.KVStoreReader(), fstream, par); err != nil {
		return err
	}
	tKV, tBytes := fstream.Stats()
	fmt.Fprintf(par.Console, "[WriteSnapshot] TOTAL: kv records: %d, bytes: %d\n", tKV, tBytes)
	return nil
}

func ScanForValues(rdr kv.StreamIterator) (*iscp.ChainID, uint32, time.Time, error) {
	var chainID *iscp.ChainID
	var stateIndex uint32
	var timestamp time.Time
	var chainIDFound, stateIndexFound, timestampFound bool
	var errR error

	err := rdr.Iterate(func(k, v []byte) bool {
		if len(k) == 0 {
			if chainIDFound {
				errR = xerrors.New("duplicate record with chainID")
				return false
			}
			if chainID, errR = iscp.ChainIDFromBytes(v); errR != nil {
				return false
			}
			chainIDFound = true
		}
		if string(k) == coreutil.StatePrefixBlockIndex {
			if stateIndexFound {
				errR = xerrors.New("duplicate record with state index")
				return false
			}
			if stateIndex, errR = util.Uint32From4Bytes(v); errR != nil {
				return false
			}
			stateIndexFound = true
		}
		if string(k) == coreutil.StatePrefixTimestamp {
			if timestampFound {
				errR = xerrors.New("duplicate record with timestamp")
				return false
			}
			if timestamp, errR = codec.DecodeTime(v); errR != nil {
				return false
			}
			timestampFound = true
		}
		return true
	})
	if err != nil {
		return nil, 0, time.Time{}, err
	}
	if errR != nil {
		return nil, 0, time.Time{}, errR
	}
	return chainID, stateIndex, timestamp, nil
}

func ScanSnapshotForValues(fname string) (*iscp.ChainID, uint32, time.Time, error) {
	stream, err := kv.OpenKVStreamFile(fname)
	if err != nil {
		return nil, 0, time.Time{}, err
	}
	defer stream.File.Close()

	return ScanForValues(stream)
}
