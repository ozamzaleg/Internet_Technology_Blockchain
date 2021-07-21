import React from 'react';

const Data = ({ data, setData }) => {
    return (
        <div className="row">
            <div className="col-25">
                <label>Data</label>
            </div>
            <div className="col-75">
                <textarea defaultValue={data} onChange={e => setData(e.target.value)} />
            </div>
        </div>
    );
}

export default Data;