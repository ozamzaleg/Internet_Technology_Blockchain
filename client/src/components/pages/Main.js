import React from 'react';
import img from '../../images/blockchain.png';

function Main() {
    return (
        <div className='content'>
            <h1>Blockchain</h1>
            <div className='blockchain_content'>
                <div className='center'>
                    <img src={img} alt='blockchain' />
                </div>
                <p>
                    A blockchain is a growing list of records, called blocks, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree). The timestamp proves that the transaction data existed when the block was published in order to get into its hash. As blocks each contain information about the block previous to it, they form a chain, with each additional block reinforcing the ones before it. Therefore, blockchains are resistant to modification of their data because once recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.
                </p>

                <p>
                    Blockchains are typically managed by a peer-to-peer network for use as a publicly distributed ledger, where nodes collectively adhere to a protocol to communicate and validate new blocks. Although blockchain records are not unalterable as forks are possible, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance.
                </p>


                <p>
                    The blockchain was invented by a person (or group of people) using the name Satoshi Nakamoto in 2008 to serve as the public transaction ledger of the cryptocurrency bitcoin. The identity of Satoshi Nakamoto remains unknown to date. The invention of the blockchain for bitcoin made it the first digital currency to solve the double-spending problem without the need of a trusted authority or central server. The bitcoin design has inspired other applications and blockchains that are readable by the public and are widely used by cryptocurrencies. The blockchain is considered a type of payment rail.  Private blockchains have been proposed for business use but Computerworld called the marketing of such privatized blockchains without a proper security model "snake oil". However, others have argued that allowed blockchains, if carefully designed, may be more decentralized and therefore more secure in practice than permissionless ones. (Wikipedia).
                </p>

                This website is a blockchain demo simulator that will demonstrate the following options: <br />
                <ul>
                    <li>Hash</li>
                    <li>Block</li>
                    <li>Blockchain</li>
                    <li>Distributed</li>
                    <li>Tokens</li>
                    <li>Coinbase</li>
                    <li>Keys</li>
                    <li>Signatures</li>
                    <li>Transactions</li>
                    <li>Full Blockchain</li>
                </ul>
                    
                <div className='center'>
                    Made by Elad Shoham and Oz Amzaleg.
                </div>
            </div>
        </div>
    );
}

export default Main;