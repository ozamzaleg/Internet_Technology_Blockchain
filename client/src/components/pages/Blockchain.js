import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBlockchain } from '../../redux/actions/blockchainActions';
import { apiBlockchain } from '../../constants/api-url';
import Blockchain from '../blockchain/Blockchain';

const BlockchainRender = () => {
    const blockchain = useSelector(state => state.allBlockchain.blockchain);
    const dispatch = useDispatch();

    useEffect(() => {
        if (blockchain.length === 0) {
            axios.get(apiBlockchain.FETCH)
                .then(res => {
                    dispatch(setBlockchain(res.data));
                }).catch(err => {
                    console.log(err);
                });
        }
    }, []);

    const fetchData = (index, api) => {
        axios.post(
            api,
            { blockchain, index }
        ).then(res => {
            dispatch(setBlockchain(res.data));
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='content'>
            <h1>Blockchain</h1>
            <div className='blockchain_content'>
                <Blockchain
                    blockchain={blockchain}
                    hash={index => fetchData(index, apiBlockchain.HASH)}
                    mine={index => fetchData(index, apiBlockchain.MINE)}
                />
            </div>
        </div>
    );
}

export default BlockchainRender;