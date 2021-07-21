import React from 'react';
import Transaction from './Transaction';

const Transactions = ({ transactions, setTransactions, disabledInput }) => {
    const setTx = (i, transaction) => {
        transactions[i] = transaction;
        setTransactions(transactions);
    }

    const renderTransactions = () => {
        return transactions.map((transaction, i) => {
            return (
                <div key={i}>
                    <Transaction
                        transaction={transaction}
                        setTransaction={transaction => setTx(i, transaction)}
                        disabledInput={disabledInput}
                    />
                </div>
            );
        });
    }

    return (
        <div className="row">
            <div className="col-25">
                <label>Transactions</label>
            </div>
            <div className="col-75">
                <div className='scroll_transactions'>
                    {renderTransactions()}
                </div>
            </div>
        </div>
    );
}

export default Transactions;