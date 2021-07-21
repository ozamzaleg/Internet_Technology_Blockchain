import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useLocalStorage from '../../services/useLocalStorage';
import { localStorageKeys } from '../../constants/localStorageKeys';
import SignTransactions from '../keys/SignTransactions';
import VerifyTransactions from '../keys/VerifyTransactions';
import SignaturesTabs from '../keys/SignaturesTabs';
import generateRandomKey from '../../services/generateRandomKey';
import { apiKeys } from '../../constants/api-url';

const Transaction = () => {
    const [transaction, setTransaction] = useLocalStorage(localStorageKeys.TRANSACTION, {
        amount: 0,
        from: '',
        to: ''
    });
    const [publicKey, setPublicKey] = useLocalStorage(localStorageKeys.PUBLIC_KEY, '');
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
        setTransaction({ ...transaction, from: publicKey });

        if (!transaction.to) {
            const privateKey = generateRandomKey();

            axios.post(
                apiKeys.FETCH_PUBLIC_KEY,
                { privateKey }
            ).then(res => {
                setTransaction({ ...transaction, to: res.data });
            }).catch(err => {
                console.log(err);
            });
        }
    }, []);

    useEffect(() => {
        setPublicKey(transaction.from);
    }, [transaction]);

    return (
        <div className='content'>
            <h1>Transaction</h1>
            <SignaturesTabs renderActive={renderActive} />
        </div>
    );
}

export default Transaction;
