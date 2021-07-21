import React from 'react';

const Signature = ({ signature, setSignature, disabledInput }) => {
    const status = !signature.valid ? 'invalid_signature' : '';

    return (
        <>
            <input type="text" disabled={true} defaultValue='Seq' className='input_details' />
            <input type="number" disabled={disabledInput} defaultValue={signature.seq} onChange={e => setSignature({ ...signature, seq: Number(e.target.value) })} className='input_data_three_variables' />
            <input type="text" disabled={true} defaultValue='Sig' className='input_details' />
            <input type="text" disabled={disabledInput} defaultValue={signature.theSignature} onChange={e => setSignature({ ...signature, theSignature: e.target.value })} className={`input_large_data ${status}`} />
        </>
    );
}

export default Signature;