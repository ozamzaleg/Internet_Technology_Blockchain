const express = require('express');
const router = express.Router();
const CoinbaseModel = require('../models/coinbase');
const { fetchDistributed, distributedHash, distributedMine,importDataFromFile } = require('../controllers/blockchain');

router.importCoinbase = async () => {
    importDataFromFile(CoinbaseModel, 'coinbases.json');
};

router.get('/fetchCoinbase', async (req, res) => {
    const distributed = await fetchDistributed(CoinbaseModel);
    res.json(distributed);
});

router.post('/hash', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedHash(distributed, peer, index, CoinbaseModel);
    res.json(newDistributed);
});

router.post('/mine', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedMine(distributed, peer, index, CoinbaseModel);
    res.json(newDistributed);
});

module.exports = router;