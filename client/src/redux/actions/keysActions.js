import { keysActionTypes } from "../../constants/action-types";

export const setMessageSignature = signature => {
    return {
        type: keysActionTypes.SET_MESSAGE_SIGNATURE,
        payload: signature
    };
}

export const setTransactionsSignature = signature => {
    return {
        type: keysActionTypes.SET_TRANSACTIONS_SIGNATURE,
        payload: signature
    };
}