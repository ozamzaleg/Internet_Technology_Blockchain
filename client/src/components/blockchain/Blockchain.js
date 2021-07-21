import React from 'react';
import Block from '../blockchain/Block';

const Blockchain = ({ blockchain, hash, mine }) => {
    const setBlock = (i, block) => {
        blockchain[i] = block;
        hash(i);
    }

    const renderBlockchain = blockchain.map((block, i) => {
        return (
            <Block
                key={i}
                status={`block ${block['hash'] === block['validHash'] ? 'valid' : 'invalid'}`}
                block={block}
                setBlock={block => setBlock(i, block)}
                mine={() => mine(i)}
            />
        )
    });

    return (
        <div className='scroll_blockchain'>
            {renderBlockchain}
        </div>
    );
}

export default Blockchain;