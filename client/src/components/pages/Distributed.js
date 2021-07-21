import React from 'react';
import { useSelector } from 'react-redux';
import { setDistributed } from '../../redux/actions/blockchainActions';
import { apiDistributed } from '../../constants/api-url';
import Distributed from '../blockchain/Distributed';

const DistributedRender = () => {
    const distributed = useSelector(state => state.allBlockchain.distributed);

    return (
        <div className='content'>
            <h1>Distributed</h1>
            <Distributed
                distributed={distributed}
                setDistributed={setDistributed}
                api={apiDistributed}
            />
        </div>
    );
}

export default DistributedRender;