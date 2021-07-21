const express = require('express');
const router = express.Router();
const { Hash } = require('../blockchain/hash');
const { Block } = require('../blockchain/block');
const { blockchainTypes } = require('../constants/blockchain-types');

router.post('/hash', (req, res) => {
    const { data } = req.body;
    const hash = new Hash(data);

    res.json(hash.hash);
});

router.post('/blockHash', (req, res) => {
    const { index, nonce, data } = req.body;
    const block = new Block(index, data, nonce);
    block.calculateHash();

    res.json(block.hash);
});

router.post('/blockMine', (req, res) => {
    const { index, data } = req.body;
    const block = new Block(index, data);
    block.mineBlock(blockchainTypes.DIFFICULTY);
    res.json(block);
});

module.exports = router;