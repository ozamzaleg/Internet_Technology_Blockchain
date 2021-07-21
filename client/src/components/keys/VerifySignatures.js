import React, { useState } from 'react';
import axios from 'axios';
import { localStorageKeys } from '../../constants/localStorageKeys';
import useLocalStorage from '../../services/useLocalStorage';
import SignaturesMessage from '../keys/SignaturesMessage';
import { apiKeys } from '../../constants/api-url';

const VerifySignatures = ({ message, setMessage, signature }) => {
    const [publicKey, setPublicKey] = useLocalStorage(localStorageKeys.PUBLIC_KEY, '');
    const [status, setStatus] = useState('');

    const verify = () => {
        axios.post(
            apiKeys.VERIFY_MESSAGE,
            { message, publicKey, signature }
        ).then(res => {
            setStatus(res.data ? 'valid_signature' : 'invalid_signature');
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='tab_signatures_height'>
            <form onSubmit={e => { verify(); e.preventDefault(); }}>
                <SignaturesMessage message={message} setMessage={setMessage} />
                <div className="row">
                    <div className="col-25">
                        <label>Public key</label>
                    </div>
                    <div className="col-75">
                        <input type="text" defaultValue={publicKey} onChange={e => setPublicKey(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Signature</label>
                    </div>
                    <div className="col-75">
                        <input type="text" defaultValue={signature} className={status} />
                    </div>
                </div>
                <div className="row">
                    <button>Verify</button>
                </div>
            </form>
        </div>
    )
}

export default VerifySignatures;

