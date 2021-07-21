import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { peers } from '../../constants/constants';
import Blockchain from './Blockchain';

const Distributed = ({ distributed, setDistributed, api }) => {
    const dispatch = useDispatch();

    const fetchData = async (peer, index, api) => {
        axios.post(
            api,
            { distributed, peer, index }
        ).then(res => {
            dispatch(setDistributed(res.data));
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        if (Object.keys(distributed).length === 0) {
            axios.get(api.FETCH)
                .then(res => {
                    dispatch(setDistributed(res.data));
                }).catch(err => {
                    console.log(err);
                });
        }
    }, []);

    const renderDistributed = Object.keys(distributed).map(i => {
        return (
            <div key={i}>
                <h1>Peer {peers[i]}</h1>
                <Blockchain
                    blockchain={distributed[i]}
                    hash={index => fetchData(i, index, api.HASH)}
                    mine={index => fetchData(i, index, api.MINE)}
                />
            </div>
        )
    });

    return (
        <div className='blockchain_content'>
            {renderDistributed}
        </div>
    );
}

export default Distributed;