// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use wasmlib::*;

pub const SC_NAME        : &str = "inccounter";
pub const SC_DESCRIPTION : &str = "";
pub const HSC_NAME       : ScHname = ScHname(0xaf2438e9);

pub const PARAM_COUNTER     : &str = "counter";
pub const PARAM_DELAY       : &str = "delay";
pub const PARAM_DUMMY       : &str = "dummy";
pub const PARAM_NI64        : &str = "ni64";
pub const PARAM_NU64        : &str = "nu64";
pub const PARAM_NUM_REPEATS : &str = "numRepeats";

pub const RESULT_BUF     : &str = "buf";
pub const RESULT_COUNTER : &str = "counter";
pub const RESULT_NI64    : &str = "ni64";
pub const RESULT_NU64    : &str = "nu64";
pub const RESULT_STR     : &str = "str";
pub const RESULT_XI64    : &str = "xi64";
pub const RESULT_XU64    : &str = "xu64";

pub const STATE_COUNTER     : &str = "counter";
pub const STATE_NUM_REPEATS : &str = "numRepeats";

pub const FUNC_CALL_INCREMENT            : &str = "callIncrement";
pub const FUNC_CALL_INCREMENT_RECURSE5X  : &str = "callIncrementRecurse5x";
pub const FUNC_ENDLESS_LOOP              : &str = "endlessLoop";
pub const FUNC_INCREMENT                 : &str = "increment";
pub const FUNC_INCREMENT_WITH_DELAY      : &str = "incrementWithDelay";
pub const FUNC_INIT                      : &str = "init";
pub const FUNC_LOCAL_STATE_INTERNAL_CALL : &str = "localStateInternalCall";
pub const FUNC_LOCAL_STATE_POST          : &str = "localStatePost";
pub const FUNC_LOCAL_STATE_SANDBOX_CALL  : &str = "localStateSandboxCall";
pub const FUNC_POST_INCREMENT            : &str = "postIncrement";
pub const FUNC_REPEAT_MANY               : &str = "repeatMany";
pub const FUNC_TEST_VLI_CODEC            : &str = "testVliCodec";
pub const FUNC_TEST_VLU_CODEC            : &str = "testVluCodec";
pub const FUNC_WHEN_MUST_INCREMENT       : &str = "whenMustIncrement";
pub const VIEW_GET_COUNTER               : &str = "getCounter";
pub const VIEW_GET_VLI                   : &str = "getVli";
pub const VIEW_GET_VLU                   : &str = "getVlu";

pub const HFUNC_CALL_INCREMENT            : ScHname = ScHname(0xeb5dcacd);
pub const HFUNC_CALL_INCREMENT_RECURSE5X  : ScHname = ScHname(0x8749fbff);
pub const HFUNC_ENDLESS_LOOP              : ScHname = ScHname(0x365f0929);
pub const HFUNC_INCREMENT                 : ScHname = ScHname(0xd351bd12);
pub const HFUNC_INCREMENT_WITH_DELAY      : ScHname = ScHname(0xa235bba7);
pub const HFUNC_INIT                      : ScHname = ScHname(0x1f44d644);
pub const HFUNC_LOCAL_STATE_INTERNAL_CALL : ScHname = ScHname(0xecfc5d33);
pub const HFUNC_LOCAL_STATE_POST          : ScHname = ScHname(0x3fd54d13);
pub const HFUNC_LOCAL_STATE_SANDBOX_CALL  : ScHname = ScHname(0x7bd22c53);
pub const HFUNC_POST_INCREMENT            : ScHname = ScHname(0x81c772f5);
pub const HFUNC_REPEAT_MANY               : ScHname = ScHname(0x4ff450d3);
pub const HFUNC_TEST_VLI_CODEC            : ScHname = ScHname(0xd5356012);
pub const HFUNC_TEST_VLU_CODEC            : ScHname = ScHname(0x9f7f63e6);
pub const HFUNC_WHEN_MUST_INCREMENT       : ScHname = ScHname(0xb4c3e7a6);
pub const HVIEW_GET_COUNTER               : ScHname = ScHname(0xb423e607);
pub const HVIEW_GET_VLI                   : ScHname = ScHname(0x0ee16f89);
pub const HVIEW_GET_VLU                   : ScHname = ScHname(0x54d624e6);
