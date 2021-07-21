import React from 'react';
import Transaction from './Transaction';
import Signature from './Signature';

const TransactionWithSignature = ({ transactionWithSignature, setTransactionWithSignature }) => {
    return (
        <>
            <Transaction
                transaction={transactionWithSignature.transaction}
                setTransaction={transaction => setTransactionWithSignature({ ...transactionWithSignature, transaction })}
            />
            <Signature
                signature={transactionWithSignature.signature}
                setSignature={signature => setTransactionWithSignature({ ...transactionWithSignature, signature })}
            />
        </>
    );
}

export default TransactionWithSignature;