import React from 'react';
import { useSelector } from 'react-redux';
import { setCoinbase } from '../../redux/actions/blockchainActions';
import { apiCoinbase } from '../../constants/api-url';
import Distributed from '../blockchain/Distributed';

const Coinbase = () => {
    const coinbase = useSelector(state => state.allBlockchain.coinbase);

    return (
        <div className='content'>
            <h1>Coinbase</h1>
            <Distributed
                distributed={coinbase}
                setDistributed={setCoinbase}
                api={apiCoinbase}
            />
        </div>
    );
}

export default Coinbase;