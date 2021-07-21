const SHA256 = require("crypto-js/sha256");

class Hash {
    constructor(data) {
        this.data = data;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.data).toString();
    }
}

module.exports.Hash = Hash;