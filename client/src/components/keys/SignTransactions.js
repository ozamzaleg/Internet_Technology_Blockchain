import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTransactionsSignature } from '../../redux/actions/keysActions';
import { apiKeys } from '../../constants/api-url';
import TransactionMessage from '../keys/TransactionMessage';
import { generateRandomKey } from '../../services/keys';

const SignTransactions = ({ transaction, setTransaction, privateKey, setPrivateKey, signature }) => {
    const dispatch = useDispatch();

    const sign = () => {
        axios.post(
            apiKeys.SIGN_TRANSACTIONS,
            { 
                transaction, 
                privateKey: privateKey !== '' ? privateKey : generateRandomKey()
            }
        ).then(res => {
            setTransaction({ ...transaction, from: res.data.publicKey });
            dispatch(setTransactionsSignature(res.data.signature));
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='tab_transactions_height'>
            <form onSubmit={e => { sign(); e.preventDefault(); }}>
                <TransactionMessage
                    transaction={transaction}
                    setTransaction={setTransaction}
                />
                <div className="row">
                    <div className="col-25">
                        <label>Private Key</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <button>Sign</button>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Message Signature</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={signature} disabled={true} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignTransactions;