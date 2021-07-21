import React from 'react';
import { useSelector } from 'react-redux';
import { localStorageKeys } from '../../constants/localStorageKeys';
import useLocalStorage from '../../services/useLocalStorage';
import SignSignatures from '../keys/SignSignatures';
import VerifySignatures from '../keys/VerifySignatures';
import SignaturesTabs from '../keys/SignaturesTabs';

const Signatures = () => {
    const signature = useSelector(state => state.allKeys.messageSignature);
    const [message, setMessage] = useLocalStorage(localStorageKeys.MESSAGE, '');

    const renderActive = active => {
        if (active === 0)
            return (<SignSignatures message={message} setMessage={setMessage} signature={signature} />);
        else
            return (<VerifySignatures message={message} setMessage={setMessage} signature={signature} />);
    }

    return (
        <div className='content'>
            <h1>Signatures</h1>
            <SignaturesTabs renderActive={renderActive} />
        </div>
    );
}

export default Signatures;