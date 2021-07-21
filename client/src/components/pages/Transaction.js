import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useLocalStorage from '../../services/useLocalStorage';
import { localStorageKeys } from '../../constants/localStorageKeys';
import SignTransactions from '../keys/SignTransactions';
import VerifyTransactions from '../keys/VerifyTransactions';
import SignaturesTabs from '../keys/SignaturesTabs';
import { apiKeys } from '../../constants/api-url';
import { key } from '../../constants/constants';
import { generateRandomKey } from '../../services/keys';

const Transaction = () => {
    const [transaction, setTransaction] = useState({
        amount: 0,
        from: '',
        to: key.TO_ADDRESS
    });
    const [privateKey, setPrivateKey] = useLocalStorage(localStorageKeys.PRIVATE_KEY, '');
    const signature = useSelector(state => state.allKeys.transactionsSignature);

    const renderActive = active => {
        if (active === 0) {
            return (<SignTransactions transaction={transaction} setTransaction={setTransaction} privateKey={privateKey} setPrivateKey={setPrivateKey} signature={signature} />);
        }
        else {
            return (<VerifyTransactions transaction={transaction} setTransaction={setTransaction} signature={signature} />);
        }
    }

    useEffect(() => {
        axios.post(
            apiKeys.FETCH_PUBLIC_KEY,
            { privateKey: privateKey !== '' ? privateKey : generateRandomKey() }
        ).then(res => {
            setTransaction({ ...transaction, from: res.data });
        }).catch(err => {
            console.log(err);
        });
    }, [privateKey]);

    return (
        <div className='content'>
            <h1>Transaction</h1>
            <SignaturesTabs renderActive={renderActive} />
        </div>
    );
}

export default Transaction;
