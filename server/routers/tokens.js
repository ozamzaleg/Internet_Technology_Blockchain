const express = require('express');
const router = express.Router();
const TokenModel = require('../models/token');
const { fetchDistributed, distributedHash, distributedMine, importDataFromFile } = require('../controllers/blockchain');

router.importTokens = async () => {
    importDataFromFile(TokenModel, 'tokens.json');
};

router.get('/fetchTokens', async (req, res) => {
    const distributed = await fetchDistributed(TokenModel);
    res.json(distributed);
});

router.post('/hash', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedHash(distributed, peer, index, TokenModel);
    res.json(newDistributed);
});

router.post('/mine', (req, res) => {
    const { distributed, peer, index } = req.body;
    const newDistributed = distributedMine(distributed, peer, index, TokenModel);
    res.json(newDistributed);
});

module.exports = router;