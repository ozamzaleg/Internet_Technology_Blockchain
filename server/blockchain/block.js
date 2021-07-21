const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, data, nonce = 0) {
        this.index = index;
        this.nonce = nonce;
        this.data = data;
        this.validHash = '';
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.data + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        this.validHash = this.hash;
    }
}

module.exports.Block = Block;