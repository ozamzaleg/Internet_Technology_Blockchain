const SHA256 = require('crypto-js/sha256');
const { blockchainTypes } = require('../constants/blockchain-types');

class Block {
    constructor(index, data, prev = '', nonce = 0) {
        this.index = index;
        this.nonce = nonce;
        this.data = data;
        this.prev = prev;
        this.validHash = '';
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.nonce + this.data + this.prev).toString();
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

        if (chain.length > 0) {
            this.chain = chain;
        } else {
            this.chain = [this.createGenesisBlock()];
        }
    }

    createGenesisBlock() {
        const block = new Block(1, '', blockchainTypes.FIRST_BLOCK_PREV);
        block.mineBlock(this.difficulty);

        return block;
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block) {
        const newBlock = new Block(this.chain.length + 1, block.data);
        newBlock.prev = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);

        return newBlock;
    }

    calculateBlocksHash(index) {
        let currentBlock;
        let validHash;
        let prev = this.chain[index].prev;

        this.chain.slice(index).map((block, i) => {
            validHash = this.chain[index + i].validHash;
            currentBlock = new Block(block.index, block.data, prev, block.nonce);
            currentBlock.hash = currentBlock.calculateHash();
            currentBlock.validHash = validHash;
            this.chain[index + i] = currentBlock;
            prev = currentBlock.hash;
        });
    }

    mineBlockCalculateHash(index) {
        const currentBlock = new Block(this.chain[index].index, this.chain[index].data, this.chain[index].prev);
        currentBlock.mineBlock(this.difficulty);
        this.chain[index] = currentBlock;
        this.calculateBlocksHash(index);
    }
}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;