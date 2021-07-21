import React, { useEffect, useState } from 'react';
import Data from './Data';
import Coinbase from './Coinbase';
import Transactions from './Transactions';
import TransactionsWithSignatures from './TransactionsWithSignatures';

const Block = ({ status, block, setBlock, mine }) => {
    const [miningBlock, setMiningBlock] = useState(false);

    const renderContent = () => {
        if (block["data"] !== undefined) {
            return (
                <Data
                    data={block.data}
                    setData={data => setBlock({ ...block, data })}
                />
            );
        } else if (block["coinbase"] !== undefined) {
            if (block["transactions"] !== undefined) {
                return (
                    <>
                        <Coinbase
                            coinbase={block.coinbase}
                            setCoinbase={coinbase => setBlock({ ...block, coinbase })}
                        />
                        <Transactions
                            transactions={block.transactions}
                            setTransactions={transactions => setBlock({ ...block, transactions })}
                        />
                    </>
                );
            } else if (block["transactionsWithSignatures"] !== undefined) {
                return (
                    <>
                        <Coinbase
                            coinbase={block.coinbase}
                            setCoinbase={coinbase => setBlock({ ...block, coinbase })}
                        />
                        <TransactionsWithSignatures
                            transactionsWithSignatures={block.transactionsWithSignatures}
                            setTransactionsWithSignatures={transactionsWithSignatures => setBlock({ ...block, transactionsWithSignatures })}
                        />
                    </>
                );
            }
        } else if (block["transactions"] !== undefined) {
            return (
                <Transactions
                    transactions={block.transactions}
                    setTransactions={transactions => setBlock({ ...block, transactions })}
                />
            );
        }
    }

    const renderButton = () => {
        if (!miningBlock) {
            return (<button>Mine</button>);
        } else {
            return (<button disabled>Mine <div className='loader'></div></button>);
        }
    }

    useEffect(() => {
        if (miningBlock) {
            mine();
        } 
    }, [miningBlock]);

    useEffect(() => {
        setMiningBlock(false);
    }, [mine]);

    return (
        <div className={`block_container ${status}`}>
            <form onSubmit={e => {setMiningBlock(true); e.preventDefault();}}>
                <div className="row">
                    <div className="col-25">
                        <label>Block Number</label>
                    </div>
                    <div className="col-75">
                        <input type="number" value={block.index} onChange={e => setBlock({ ...block, index: Number(e.target.value) })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Nonce</label>
                    </div>
                    <div className="col-75">
                        <input type="number" value={block.nonce} onChange={e => setBlock({ ...block, nonce: Number(e.target.value) })} />
                    </div>
                </div>
                {renderContent()}
                <div className="row">
                    <div className="col-25">
                        <label>Prev</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={block.prev} disabled={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Hash</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={block.hash} disabled={true} />
                    </div>
                </div>
                <div className="row">
                    {renderButton()}
                </div>
            </form>
        </div>
    )
}

export default Block;