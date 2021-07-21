import { keysActionTypes } from "../../constants/action-types";

const initialState = {
    messageSignature: '',
    transactionsSignature: '',
};

export const keysReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case keysActionTypes.SET_MESSAGE_SIGNATURE:
            return { ...state, messageSignature: payload };
        case keysActionTypes.SET_TRANSACTIONS_SIGNATURE:
            return { ...state, transactionsSignature: payload };
        default:
            return state;
    }
};