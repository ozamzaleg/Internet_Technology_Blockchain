const SHA256 = require('crypto-js/sha256');
const { blockchainTypes } = require('../constants/blockchain-types');
const { privateKeyToPublic, verifyTransaction } = require('./keys');

class Block {
    constructor(index, coinbase, transactionsWithSignatures, prev, nonce = 0) {
        this.index = index;
        this.nonce = nonce;
        this.coinbase = coinbase;
        this.transactionsWithSignatures = transactionsWithSignatures;
        this.prev = prev;
        this.validHash = '';
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + JSON.stringify(this.coinbase) + JSON.stringify(this.transactionsWithSignatures) + this.prev + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        this.validHash = this.hash;
    }
}

class Blockchain {
    constructor(chain) {
        this.difficulty = blockchainTypes.DIFFICULTY;
        this.miningReward = blockchainTypes.MINING_REWARD;

        if (chain.length > 0) {
            this.chain = chain;
        } else {
            this.chain = [this.createGenesisBlock()];
        }
    }

    createGenesisBlock() {
        const block = new Block(1, { miningReward: this.miningReward, to: privateKeyToPublic(blockchainTypes.FIRST_BLOCK_PRIVATE_KEY) }, [], blockchainTypes.FIRST_BLOCK_PREV);
        block.mineBlock(this.difficulty);

        return block;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block) {
        const newBlock = new Block(this.chain.length + 1, block.coinbase, block.transactionsWithSignatures, this.getLatestBlock().hash);
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);

        return newBlock;
    }

    isValidSignature(transactionWithSignature) {
        const transaction = transactionWithSignature.transaction;
        const theSignature = transactionWithSignature.signature.theSignature;

        return verifyTransaction(transaction, transaction.from, theSignature);
    }

    calculateBlocksHash(index) {
        let currentBlock;
        let validHash;
        let prev = this.chain[index].prev;

        this.chain.slice(index).map((block, i) => {
            validHash = this.chain[index + i].validHash;
            currentBlock = new Block(block.index, block.coinbase, block.transactionsWithSignatures, prev, block.nonce);
            currentBlock.validHash = validHash;
            
            for (let j = 0; j < currentBlock.transactionsWithSignatures.length; j++) {
                currentBlock.transactionsWithSignatures[j].signature.valid = this.isValidSignature(currentBlock.transactionsWithSignatures[j]);
            }
            
            currentBlock.hash = currentBlock.calculateHash();
            this.chain[index + i] = currentBlock;
            prev = currentBlock.hash;
        });
    }

    mineBlockCalculateHash(index) {
        const currentBlock = new Block(this.chain[index].index, this.chain[index].coinbase, this.chain[index].transactionsWithSignatures, this.chain[index].prev);
        currentBlock.mineBlock(this.difficulty);
        this.chain[index] = currentBlock;
        this.calculateBlocksHash(index);
    }
}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;