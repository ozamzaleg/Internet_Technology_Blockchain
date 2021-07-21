const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    nonce: {
        type: Number,
        required: true
    },
    data: {
        type: String
    },
    prev: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Block', blockSchema);
