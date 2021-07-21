import React from 'react';

const Coinbase = ({ coinbase, setCoinbase, errorInput, disabledInput }) => {
    return (
        <div className="row">
            <div className="col-25">
                <label>Coinbase</label>
            </div>
            <div className="col-75">
                <input type='text' defaultValue='$' disabled={true} className='input_details' />
                <input type='number' step='0.01' defaultValue={coinbase.miningReward} disabled={disabledInput} onChange={e => setCoinbase({ ...coinbase, miningReward: Number(e.target.value) })} className='input_data_three_variables' />
                <input type='text' defaultValue='To' disabled={true} className='input_details' />
                <input type='text' defaultValue={coinbase.to} onChange={e => setCoinbase({ ...coinbase, to: e.target.value })} className='input_large_data' />
                <div className='error'>{errorInput}</div>
            </div>
        </div>
    );
}

export default Coinbase;
