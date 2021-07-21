import React from 'react';
import Message from './Message';

const TransactionMessage = ({ transaction, setTransaction }) => {
    return (
        <div className="row">
            <div className="col-25">
                <label>Message</label>
            </div>
            <div className="col-75">
                <Message
                    transaction={transaction}
                    setTransaction={transaction => setTransaction(transaction)}
                />
            </div>
        </div>
    )
}

export default TransactionMessage;

