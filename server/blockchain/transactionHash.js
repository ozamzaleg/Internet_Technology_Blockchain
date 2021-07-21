const SHA256 = require("crypto-js/sha256");

class TransactionHash {
    constructor(amount, from, to) {
        this.amount = amount;
        this.from = from;
        this.to = to;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.amount + this.from + this.to).toString();
    }
}

module.exports.TransactionHash = TransactionHash;