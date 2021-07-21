import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { localStorageKeys } from '../../constants/localStorageKeys';
import useLocalStorage from '../../services/useLocalStorage';
import { generateRandomKey } from '../../services/keys';
import { apiKeys } from '../../constants/api-url';

const Keys = () => {
    const [privateKey, setPrivateKey] = useLocalStorage(localStorageKeys.PRIVATE_KEY, '');
    const [publicKey, setPublicKey] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setPublicKey(privateKey);
    }, []);

    useEffect(() => {
        if (privateKey === '') {
            setError('*Private key can\'t be empty');
        } else {
            setError('');

            axios.post(
                apiKeys.FETCH_PUBLIC_KEY,
                { privateKey }
            ).then(res => {
                setPublicKey(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
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
                                <div className='error'>
                                    {error}
                                </div>
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