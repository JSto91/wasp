// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package testwasmlib

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"

type ImmutableArrayClearParams struct {
	id int32
}

func (s ImmutableArrayClearParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamName])
}

type MutableArrayClearParams struct {
	id int32
}

func (s MutableArrayClearParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamName])
}

type ImmutableArrayCreateParams struct {
	id int32
}

func (s ImmutableArrayCreateParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamName])
}

type MutableArrayCreateParams struct {
	id int32
}

func (s MutableArrayCreateParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamName])
}

type ImmutableArraySetParams struct {
	id int32
}

func (s ImmutableArraySetParams) Index() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamIndex])
}

func (s ImmutableArraySetParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamName])
}

func (s ImmutableArraySetParams) Value() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamValue])
}

type MutableArraySetParams struct {
	id int32
}

func (s MutableArraySetParams) Index() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamIndex])
}

func (s MutableArraySetParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamName])
}

func (s MutableArraySetParams) Value() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamValue])
}

type MapStringToImmutableBytes struct {
	objID int32
}

func (m MapStringToImmutableBytes) GetBytes(key string) wasmlib.ScImmutableBytes {
	return wasmlib.NewScImmutableBytes(m.objID, wasmlib.Key(key).KeyID())
}

type ImmutableParamTypesParams struct {
	id int32
}

func (s ImmutableParamTypesParams) Address() wasmlib.ScImmutableAddress {
	return wasmlib.NewScImmutableAddress(s.id, idxMap[IdxParamAddress])
}

func (s ImmutableParamTypesParams) AgentID() wasmlib.ScImmutableAgentID {
	return wasmlib.NewScImmutableAgentID(s.id, idxMap[IdxParamAgentID])
}

func (s ImmutableParamTypesParams) Bool() wasmlib.ScImmutableBool {
	return wasmlib.NewScImmutableBool(s.id, idxMap[IdxParamBool])
}

func (s ImmutableParamTypesParams) Bytes() wasmlib.ScImmutableBytes {
	return wasmlib.NewScImmutableBytes(s.id, idxMap[IdxParamBytes])
}

func (s ImmutableParamTypesParams) ChainID() wasmlib.ScImmutableChainID {
	return wasmlib.NewScImmutableChainID(s.id, idxMap[IdxParamChainID])
}

func (s ImmutableParamTypesParams) Color() wasmlib.ScImmutableColor {
	return wasmlib.NewScImmutableColor(s.id, idxMap[IdxParamColor])
}

func (s ImmutableParamTypesParams) Hash() wasmlib.ScImmutableHash {
	return wasmlib.NewScImmutableHash(s.id, idxMap[IdxParamHash])
}

func (s ImmutableParamTypesParams) Hname() wasmlib.ScImmutableHname {
	return wasmlib.NewScImmutableHname(s.id, idxMap[IdxParamHname])
}

func (s ImmutableParamTypesParams) Int16() wasmlib.ScImmutableInt16 {
	return wasmlib.NewScImmutableInt16(s.id, idxMap[IdxParamInt16])
}

func (s ImmutableParamTypesParams) Int32() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamInt32])
}

func (s ImmutableParamTypesParams) Int64() wasmlib.ScImmutableInt64 {
	return wasmlib.NewScImmutableInt64(s.id, idxMap[IdxParamInt64])
}

func (s ImmutableParamTypesParams) Int8() wasmlib.ScImmutableInt8 {
	return wasmlib.NewScImmutableInt8(s.id, idxMap[IdxParamInt8])
}

func (s ImmutableParamTypesParams) Param() MapStringToImmutableBytes {
	return MapStringToImmutableBytes{objID: s.id}
}

func (s ImmutableParamTypesParams) RequestID() wasmlib.ScImmutableRequestID {
	return wasmlib.NewScImmutableRequestID(s.id, idxMap[IdxParamRequestID])
}

func (s ImmutableParamTypesParams) String() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamString])
}

func (s ImmutableParamTypesParams) Uint16() wasmlib.ScImmutableUint16 {
	return wasmlib.NewScImmutableUint16(s.id, idxMap[IdxParamUint16])
}

func (s ImmutableParamTypesParams) Uint32() wasmlib.ScImmutableUint32 {
	return wasmlib.NewScImmutableUint32(s.id, idxMap[IdxParamUint32])
}

func (s ImmutableParamTypesParams) Uint64() wasmlib.ScImmutableUint64 {
	return wasmlib.NewScImmutableUint64(s.id, idxMap[IdxParamUint64])
}

func (s ImmutableParamTypesParams) Uint8() wasmlib.ScImmutableUint8 {
	return wasmlib.NewScImmutableUint8(s.id, idxMap[IdxParamUint8])
}

type MapStringToMutableBytes struct {
	objID int32
}

func (m MapStringToMutableBytes) Clear() {
	wasmlib.Clear(m.objID)
}

func (m MapStringToMutableBytes) GetBytes(key string) wasmlib.ScMutableBytes {
	return wasmlib.NewScMutableBytes(m.objID, wasmlib.Key(key).KeyID())
}

type MutableParamTypesParams struct {
	id int32
}

func (s MutableParamTypesParams) Address() wasmlib.ScMutableAddress {
	return wasmlib.NewScMutableAddress(s.id, idxMap[IdxParamAddress])
}

func (s MutableParamTypesParams) AgentID() wasmlib.ScMutableAgentID {
	return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxParamAgentID])
}

func (s MutableParamTypesParams) Bool() wasmlib.ScMutableBool {
	return wasmlib.NewScMutableBool(s.id, idxMap[IdxParamBool])
}

func (s MutableParamTypesParams) Bytes() wasmlib.ScMutableBytes {
	return wasmlib.NewScMutableBytes(s.id, idxMap[IdxParamBytes])
}

func (s MutableParamTypesParams) ChainID() wasmlib.ScMutableChainID {
	return wasmlib.NewScMutableChainID(s.id, idxMap[IdxParamChainID])
}

func (s MutableParamTypesParams) Color() wasmlib.ScMutableColor {
	return wasmlib.NewScMutableColor(s.id, idxMap[IdxParamColor])
}

func (s MutableParamTypesParams) Hash() wasmlib.ScMutableHash {
	return wasmlib.NewScMutableHash(s.id, idxMap[IdxParamHash])
}

func (s MutableParamTypesParams) Hname() wasmlib.ScMutableHname {
	return wasmlib.NewScMutableHname(s.id, idxMap[IdxParamHname])
}

func (s MutableParamTypesParams) Int16() wasmlib.ScMutableInt16 {
	return wasmlib.NewScMutableInt16(s.id, idxMap[IdxParamInt16])
}

func (s MutableParamTypesParams) Int32() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamInt32])
}

func (s MutableParamTypesParams) Int64() wasmlib.ScMutableInt64 {
	return wasmlib.NewScMutableInt64(s.id, idxMap[IdxParamInt64])
}

func (s MutableParamTypesParams) Int8() wasmlib.ScMutableInt8 {
	return wasmlib.NewScMutableInt8(s.id, idxMap[IdxParamInt8])
}

func (s MutableParamTypesParams) Param() MapStringToMutableBytes {
	return MapStringToMutableBytes{objID: s.id}
}

func (s MutableParamTypesParams) RequestID() wasmlib.ScMutableRequestID {
	return wasmlib.NewScMutableRequestID(s.id, idxMap[IdxParamRequestID])
}

func (s MutableParamTypesParams) String() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamString])
}

func (s MutableParamTypesParams) Uint16() wasmlib.ScMutableUint16 {
	return wasmlib.NewScMutableUint16(s.id, idxMap[IdxParamUint16])
}

func (s MutableParamTypesParams) Uint32() wasmlib.ScMutableUint32 {
	return wasmlib.NewScMutableUint32(s.id, idxMap[IdxParamUint32])
}

func (s MutableParamTypesParams) Uint64() wasmlib.ScMutableUint64 {
	return wasmlib.NewScMutableUint64(s.id, idxMap[IdxParamUint64])
}

func (s MutableParamTypesParams) Uint8() wasmlib.ScMutableUint8 {
	return wasmlib.NewScMutableUint8(s.id, idxMap[IdxParamUint8])
}

type ImmutableArrayLengthParams struct {
	id int32
}

func (s ImmutableArrayLengthParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamName])
}

type MutableArrayLengthParams struct {
	id int32
}

func (s MutableArrayLengthParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamName])
}

type ImmutableArrayValueParams struct {
	id int32
}

func (s ImmutableArrayValueParams) Index() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamIndex])
}

func (s ImmutableArrayValueParams) Name() wasmlib.ScImmutableString {
	return wasmlib.NewScImmutableString(s.id, idxMap[IdxParamName])
}

type MutableArrayValueParams struct {
	id int32
}

func (s MutableArrayValueParams) Index() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamIndex])
}

func (s MutableArrayValueParams) Name() wasmlib.ScMutableString {
	return wasmlib.NewScMutableString(s.id, idxMap[IdxParamName])
}

type ImmutableBlockRecordParams struct {
	id int32
}

func (s ImmutableBlockRecordParams) BlockIndex() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamBlockIndex])
}

func (s ImmutableBlockRecordParams) RecordIndex() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamRecordIndex])
}

type MutableBlockRecordParams struct {
	id int32
}

func (s MutableBlockRecordParams) BlockIndex() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamBlockIndex])
}

func (s MutableBlockRecordParams) RecordIndex() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamRecordIndex])
}

type ImmutableBlockRecordsParams struct {
	id int32
}

func (s ImmutableBlockRecordsParams) BlockIndex() wasmlib.ScImmutableInt32 {
	return wasmlib.NewScImmutableInt32(s.id, idxMap[IdxParamBlockIndex])
}

type MutableBlockRecordsParams struct {
	id int32
}

func (s MutableBlockRecordsParams) BlockIndex() wasmlib.ScMutableInt32 {
	return wasmlib.NewScMutableInt32(s.id, idxMap[IdxParamBlockIndex])
}
