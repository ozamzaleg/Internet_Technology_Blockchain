import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setHash } from '../../redux/actions/blockchainActions';
import { apiBlock } from '../../constants/api-url';

const Hash = () => {
    const hash = useSelector(state => state.allBlockchain.hash);
    const dispatch = useDispatch();

    const fetchHash = (data = '') => {
        axios.post(
            apiBlock.HASH,
            { data }
        ).then(res => {
            dispatch(setHash(res.data));
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchHash();
    }, []);

    return (
        <div className='content'>
            <h1>Hash</h1>
            <div className='block_content'>
                <div className='container'>
                    <form>
                        <div className="row">
                            <div className="col-25">
                                <label>Data</label>
                            </div>
                            <div className="col-75">
                                <textarea onChange={e => fetchHash(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Hash</label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={hash} disabled={true}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Hash;