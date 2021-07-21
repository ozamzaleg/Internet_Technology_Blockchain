import React from 'react';
import Transaction from './Transaction';
import Signature from './Signature';

const TransactionWithSignature = ({ transactionWithSignature, setTransactionWithSignature, disabledInput }) => {
    return (
        <>
            <Transaction
                transaction={transactionWithSignature.transaction}
                setTransaction={transaction => setTransactionWithSignature({ ...transactionWithSignature, transaction })}
                disabledInput={disabledInput}
            />
            <Signature
                signature={transactionWithSignature.signature}
                setSignature={signature => setTransactionWithSignature({ ...transactionWithSignature, signature })}
                disabledInput={disabledInput}
            />
        </>
    );
}

export default TransactionWithSignature;