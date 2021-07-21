import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { localStorageKeys } from '../../constants/localStorageKeys';
import useLocalStorage from '../../services/useLocalStorage';
import SignSignatures from '../keys/SignSignatures';
import VerifySignatures from '../keys/VerifySignatures';
import SignaturesTabs from '../keys/SignaturesTabs';
import { apiKeys } from '../../constants/api-url';
import { generateRandomKey } from '../../services/keys';

const Signatures = () => {
    const signature = useSelector(state => state.allKeys.messageSignature);
    const [message, setMessage] = useLocalStorage(localStorageKeys.MESSAGE, '');
    const [privateKey, setPrivateKey] = useLocalStorage(localStorageKeys.PRIVATE_KEY, '');
    const [publicKey, setPublicKey] = useState('');

    const renderActive = active => {
        if (active === 0)
            return (
                <SignSignatures
                    message={message} 
                    setMessage={setMessage} 
                    privateKey={privateKey} 
                    setPrivateKey={setPrivateKey}
                    signature={signature} 
                />
            );
        else
            return (
                <VerifySignatures
                    message={message} 
                    setMessage={setMessage}
                    publicKey={publicKey}
                    setPublicKey={setPublicKey}
                    signature={signature} 
                />
            );
    }

    useEffect(() => {
        axios.post(
            apiKeys.FETCH_PUBLIC_KEY,
            { privateKey: privateKey !== '' ? privateKey : generateRandomKey() }
        ).then(res => {
            setPublicKey(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [privateKey]);

    return (
        <div className='content'>
            <h1>Signatures</h1>
            <SignaturesTabs renderActive={renderActive} />
        </div>
    );
}

export default Signatures;