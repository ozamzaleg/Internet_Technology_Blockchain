import React, { useState } from 'react';

const SignaturesTabs = ({ renderActive }) => {
    const [active, setActive] = useState(0);

    return (
        <div className='tabs'>
            <div className='tab_links'>
                <div className='tab_link' onClick={() => setActive(0)}>Sign</div>
                <div className='tab_link' onClick={() => setActive(1)}>Verify</div>
            </div>

            <div className='tab_content'>
                {renderActive(active)}
            </div>
        </div>
    );
}

export default SignaturesTabs;