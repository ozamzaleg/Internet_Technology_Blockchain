const mongoose = require('mongoose');

const fullBlockSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    nonce: {
        type: Number,
        required: true
    },
    coinbase: {
        miningReward: Number,
        to: String
    },
    transactionsWithSignatures: [{
        transaction: {
            amount: Number,
            from: String,
            to: String
        },
        signature: {
            seq: Number,
            privateKey: Number,
            theSignature: String,
            valid: Boolean
        },
        _id: false
    }],
    prev: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('FullBlock', fullBlockSchema);