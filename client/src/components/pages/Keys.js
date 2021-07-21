import React, { useEffect } from 'react';
import axios from 'axios';
import { localStorageKeys } from '../../constants/localStorageKeys';
import useLocalStorage from '../../services/useLocalStorage';
import generateRandomKey from '../../services/generateRandomKey';
import { apiKeys } from '../../constants/api-url';

const Keys = () => {
    const [publicKey, setPublicKey] = useLocalStorage(localStorageKeys.PUBLIC_KEY, '');
    const [privateKey, setPrivateKey] = useLocalStorage(localStorageKeys.PRIVATE_KEY, '');

    useEffect(() => {
        if (privateKey === '') {
            setPrivateKey(generateRandomKey());
        }
    }, []);

    useEffect(() => {
        axios.post(
            apiKeys.FETCH_PUBLIC_KEY,
            { privateKey }
        ).then(res => {
            setPublicKey(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [privateKey]);

    return (
        <div className='content'>
            <h1>Public / Private Key Pairs</h1>
            <div className='block_content'>
                <div className='container'>
                    <form onSubmit={() => setPrivateKey(generateRandomKey())}>
                        <div className="row">
                            <div className="col-25">
                                <label>Private Key</label>
                            </div>
                            <div className="col-75">
                                <input type="number" value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Public Key</label>
                            </div>
                            <div className="col-75">
                                <input type="text" value={publicKey} disabled={true} />
                            </div>
                        </div>
                        <div className="row">
                            <button>Random</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Keys;