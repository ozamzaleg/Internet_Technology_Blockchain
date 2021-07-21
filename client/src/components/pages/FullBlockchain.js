import React from 'react';
import { useSelector } from 'react-redux';
import { setFullBlockchain } from '../../redux/actions/blockchainActions';
import { apiFullBlockchain } from '../../constants/api-url';
import Distributed from '../blockchain/Distributed';

const FullBlockchain = () => {
    const fullBlockchain = useSelector(state => state.allBlockchain.fullBlockchain);

    return (
        <div className='content'>
            <h1>Full Blockchain</h1>
            <Distributed
                distributed={fullBlockchain}
                setDistributed={setFullBlockchain}
                api={apiFullBlockchain}
            />
        </div>
    );
}

export default FullBlockchain;