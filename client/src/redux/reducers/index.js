import { combineReducers } from 'redux';
import { blockchainReducer } from './blockchainReducer';
import { keysReducer } from './keysReducer';

const reducers = combineReducers({
    allBlockchain: blockchainReducer,
    allKeys: keysReducer
});

export default reducers;