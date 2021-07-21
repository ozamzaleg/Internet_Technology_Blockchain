import React, { useState } from 'react';
import axios from 'axios';
import TransactionMessage from '../keys/TransactionMessage';
import { apiKeys } from '../../constants/api-url';

const VerifyTransactions = ({ transaction, setTransaction, signature }) => {
    const [status, setStatus] = useState('');

    const verify = () => {
        axios.post(
            apiKeys.VERIFY_TRANSACTIONS,
            { transaction, signature }
        ).then(res => {
            setStatus(res.data ? 'valid_signature' : 'invalid_signature');
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='tab_transactions_height'>
            <form onSubmit={e => { verify(); e.preventDefault(); }}>
                <TransactionMessage transaction={transaction} setTransaction={setTransaction} />
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

export default VerifyTransactions;
