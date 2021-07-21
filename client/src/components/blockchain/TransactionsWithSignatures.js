import React from 'react';
import TransactionWithSignature from './TransactionWithSignature';

const TransactionsWithSignatures = ({ transactionsWithSignatures, setTransactionsWithSignatures, disabledInput }) => {
    const setTx = (i, transactionWithSignature) => {
        transactionsWithSignatures[i] = transactionWithSignature;
        setTransactionsWithSignatures(transactionsWithSignatures);
    }

    const renderTransactions = () => {
        return transactionsWithSignatures.map((transactionWithSignature, i) => {
            return (
                <div key={i}>
                    <TransactionWithSignature
                        transactionWithSignature={transactionWithSignature}
                        setTransactionWithSignature={transactionWithSignature => setTx(i, transactionWithSignature)}
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
            <div className="col-75 ">
                <div className='scroll_transactions'>
                    {renderTransactions()}
                </div>
            </div>
        </div>
    );
}

export default TransactionsWithSignatures;