import React from 'react';

const SignaturesMessage = ({ message, setMessage }) => {
    return (
        <div className="row">
            <div className="col-25">
                <label>Message</label>
            </div>
            <div className="col-75">
                <textarea defaultValue={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default SignaturesMessage;

