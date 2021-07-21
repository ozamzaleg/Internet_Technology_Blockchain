import React, { useState } from 'react';

const SignaturesTabs = ({ renderActive }) => {
    const [active, setActive] = useState(0);

    const changeActive = newActive => {
        if (active !== newActive) {
            setActive(newActive);
        }
    }

    return (
        <div className='tabs'>
            <div className='tab_links'>
                <div className='tab_link' onClick={() => changeActive(0)}>Sign</div>
                <div className='tab_link' onClick={() => changeActive(1)}>Verify</div>
            </div>

            <div className='tab_content'>
                {renderActive(active)}
            </div>
        </div>
    );
}

export default SignaturesTabs;