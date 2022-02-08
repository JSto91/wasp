// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;

#[derive(Clone)]
pub struct Donation {
    pub amount    : u64,  // amount donated
    pub donator   : ScAgentID,  // who donated
    pub error     : String,  // error to be reported to donator if anything goes wrong
    pub feedback  : String,  // the feedback for the person donated to
    pub timestamp : u64,  // when the donation took place
}

impl Donation {
    pub fn from_bytes(bytes: &[u8]) -> Donation {
        let mut dec = WasmDecoder::new(bytes);
        Donation {
            amount    : uint64_decode(&mut dec),
            donator   : agent_id_decode(&mut dec),
            error     : string_decode(&mut dec),
            feedback  : string_decode(&mut dec),
            timestamp : uint64_decode(&mut dec),
        }
    }

    pub fn to_bytes(&self) -> Vec<u8> {
        let mut enc = WasmEncoder::new();
		uint64_encode(&mut enc, self.amount);
		agent_id_encode(&mut enc, &self.donator);
		string_encode(&mut enc, &self.error);
		string_encode(&mut enc, &self.feedback);
		uint64_encode(&mut enc, self.timestamp);
        enc.buf()
    }
}

#[derive(Clone)]
pub struct ImmutableDonation {
    pub(crate) proxy: Proxy,
}

impl ImmutableDonation {
    pub fn exists(&self) -> bool {
        self.proxy.exists()
    }

    pub fn value(&self) -> Donation {
        Donation::from_bytes(&self.proxy.get())
    }
}

#[derive(Clone)]
pub struct MutableDonation {
    pub(crate) proxy: Proxy,
}

impl MutableDonation {
    pub fn delete(&self) {
        self.proxy.delete();
    }

    pub fn exists(&self) -> bool {
        self.proxy.exists()
    }

    pub fn set_value(&self, value: &Donation) {
        self.proxy.set(&value.to_bytes());
    }

    pub fn value(&self) -> Donation {
        Donation::from_bytes(&self.proxy.get())
    }
}