const express = require('express');
const router = express.Router();
const BlockModel = require('../models/block');
const { fetchDistributed, distributedHash, distributedMine } = require('../controllers/blockchain');

router.get('/fetchDistributed', async (req, res) => {
    const distributed = await fetchDistributed(BlockModel);
    res.json(distributed);
});

router.post('/hash', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedHash(distributed, peer, index, BlockModel);
    res.json(newDistributed);
});

router.post('/mine', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedMine(distributed, peer, index, BlockModel);
    res.json(newDistributed);
});

module.exports = router;