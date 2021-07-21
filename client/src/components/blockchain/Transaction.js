import React from 'react';

const Transaction = ({ transaction, setTransaction, disabledInput }) => {
    return (
        <div>
            <input type='text' defaultValue='$' disabled={true} className='input_details' />
            <input type='number' step='0.01' disabled={disabledInput} defaultValue={transaction.amount} onChange={e => setTransaction({ ...transaction, amount: Number(e.target.value) })} className='input_data_three_variables' />
            <input type='text' defaultValue='From' disabled={true} className='input_details' />
            <input type='text' defaultValue={transaction.from} disabled={disabledInput} onChange={e => setTransaction({ ...transaction, from: e.target.value })} className='input_data_three_variables' />
            <input type='text' defaultValue='To' disabled={true} className='input_details' />
            <input type='text' defaultValue={transaction.to} disabled={disabledInput} onChange={e => setTransaction({ ...transaction, to: e.target.value })} className='input_data_three_variables' />
        </div>
    );
}

export default Transaction;