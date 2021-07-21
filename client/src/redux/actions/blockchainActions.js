import { blockchainActionTypes } from "../../constants/action-types";

export const setHash = hash => {
    return {
        type: blockchainActionTypes.SET_HASH,
        payload: hash
    };
}

export const setBlock = block => {
    return {
        type: blockchainActionTypes.SET_BLOCK,
        payload: block
    };
}

export const setBlockchain = blockchain => {
    return {
        type: blockchainActionTypes.SET_BLOCKCHAIN,
        payload: blockchain
    };
};

export const setDistributed = distributed => {
    return {
        type: blockchainActionTypes.SET_DISTRIBUTED,
        payload: distributed
    };
}

export const setTokens = tokens => {
    return {
        type: blockchainActionTypes.SET_TOKENS,
        payload: tokens
    };
};

export const setCoinbase = coinbase => {
    return {
        type: blockchainActionTypes.SET_COINBASE,
        payload: coinbase
    };
};

export const setFullBlockchain = fullBlockchain => {
    return {
        type: blockchainActionTypes.SET_FULL_BLOCKCHAIN,
        payload: fullBlockchain
    };
};