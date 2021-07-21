import React from 'react';
import { useSelector } from 'react-redux';
import { setTokens } from '../../redux/actions/blockchainActions';
import { apiTokens } from '../../constants/api-url';
import Distributed from '../blockchain/Distributed';

const Tokens = () => {
    const tokens = useSelector(state => state.allBlockchain.tokens);

    return (
        <div className='content'>
            <h1>Tokens</h1>
            <Distributed
                distributed={tokens}
                setDistributed={setTokens}
                api={apiTokens}
            />
        </div>
    );
}

export default Tokens;