const mongoose = require('mongoose');

const coinbaseSchema = new mongoose.Schema({
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
        to: String,
    },
    transactions: [{
        amount: Number,
        from: String,
        to: String,
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

module.exports = mongoose.model('Coinbase', coinbaseSchema);
