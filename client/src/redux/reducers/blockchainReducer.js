import { blockchainActionTypes } from "../../constants/action-types";

const initialState = {
    hash: '',
    block: {
        index: 1,
        nonce: 0,
        data: ''
    },
    blockchain: [],
    distributed: {},
    tokens: {},
    coinbase: {},
    fullBlockchain: {}
};

export const blockchainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case blockchainActionTypes.SET_HASH:
            return { ...state, hash: payload };
        case blockchainActionTypes.SET_BLOCK:
            return { ...state, block: payload };
        case blockchainActionTypes.SET_BLOCKCHAIN:
            return { ...state, blockchain: payload };
        case blockchainActionTypes.SET_DISTRIBUTED:
            return { ...state, distributed: payload };
        case blockchainActionTypes.SET_TOKENS:
            return { ...state, tokens: payload };
        case blockchainActionTypes.SET_COINBASE:
            return { ...state, coinbase: payload };
        case blockchainActionTypes.SET_FULL_BLOCKCHAIN:
            return { ...state, fullBlockchain: payload };
        default:
            return state;
    }
};