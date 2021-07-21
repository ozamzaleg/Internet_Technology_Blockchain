import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMessageSignature } from '../../redux/actions/keysActions';
import SignaturesMessage from '../keys/SignaturesMessage';
import { apiKeys } from '../../constants/api-url';
import { generateRandomKey } from '../../services/keys';

const Signatures = ({ message, setMessage, privateKey, setPrivateKey, signature }) => {
    const dispatch = useDispatch();

    const sign = e => {
        e.preventDefault();

        axios.post(
            apiKeys.SIGN_MESSAGE,
            { message, privateKey }
        ).then(res => {
            dispatch(setMessageSignature(res.data));
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='tab_signatures_height'>
            <form onSubmit={e => sign(e)}>
                <SignaturesMessage message={message} setMessage={setMessage} />
                <div className="row">
                    <div className="col-25">
                        <label>Private Key</label>
                    </div>
                    <div className="col-75">
                        <input type="number" value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <button>Sign</button>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Message Signature</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={signature} disabled={true} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signatures;

