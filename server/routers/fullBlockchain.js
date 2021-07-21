const express = require('express');
const router = express.Router();
const FullBlockModel = require('../models/fullBlock');
const { fetchDistributed, distributedHash, distributedMine, importDataFromFile } = require('../controllers/blockchain');

router.importFullBlockchain = async () => {
    importDataFromFile(FullBlockModel, 'fullblocks.json');
};

router.get('/fetchFullBlockchain', async (req, res) => {
    const distributed = await fetchDistributed(FullBlockModel);
    res.json(distributed);
});

router.post('/hash', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedHash(distributed, peer, index, FullBlockModel);
    res.json(newDistributed);
});

router.post('/mine', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedMine(distributed, peer, index, FullBlockModel);
    res.json(newDistributed);
});

module.exports = router;