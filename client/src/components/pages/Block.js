import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setBlock } from '../../redux/actions/blockchainActions';
import { apiBlock } from '../../constants/api-url';

const Block = () => {
    const block = useSelector(state => state.allBlockchain.block);
    const dispatch = useDispatch();

    const hash = block => {
        axios.post(
            apiBlock.BLOCK_HASH,
            block
        ).then(res => {
            dispatch(setBlock({ ...block, hash: res.data }));
        }).catch(err => {
            console.log(err);
        });
    }

    const mine = () => {
        axios.post(
            apiBlock.BLOCK_MINE,
            block
        ).then(res => {
            dispatch(setBlock(res.data));
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        if (block["hash"] === undefined) {
            mine();
        }
    }, []);

    return (
        <div className='content'>
            <h1>Block</h1>
            <div className='block_content'>
                <div className={`container ${block.hash === block.validHash ? 'valid' : 'invalid'}`}>
                    <form onSubmit={e => { mine(); e.preventDefault(); }}>
                        <div className="row">
                            <div className="col-25">
                                <label>Block Number</label>
                            </div>
                            <div className="col-75">
                                <input type="number" value={block.index !== undefined ? block.index : 1} onChange={e => hash({ ...block, index: e.target.value })}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Nonce</label>
                            </div>
                            <div className="col-75">
                                <input type="number" value={block.nonce !== undefined ? block.nonce : 0} onChange={e => hash({ ...block, nonce: e.target.value })}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Data</label>
                            </div>
                            <div className="col-75">
                                <textarea value={block.data !== undefined ? block.data : ''} onChange={e => hash({ ...block, data: e.target.value })}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Hash</label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={block.hash !== undefined ? block.hash : ''} disabled={true}></input>
                            </div>
                        </div>
                        <div className="row">
                            <button>Mine</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Block;