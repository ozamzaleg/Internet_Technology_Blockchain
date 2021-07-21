const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    nonce: {
        type: Number,
        required: true
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

module.exports = mongoose.model('Token', tokenSchema);
