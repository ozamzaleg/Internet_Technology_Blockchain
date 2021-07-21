const express = require('express');
const router = express.Router();
const BlockModel = require('../models/block');
const { fetchBlockchain, blockchainHash, blockchainMine, importDataFromFile } = require('../controllers/blockchain');

router.importBlockchain = async () => {
    importDataFromFile(BlockModel, 'blocks.json');
};

router.get('/fetchBlockchain', async (req, res) => {
    const blockchain = await fetchBlockchain(BlockModel);
    res.json(blockchain.chain);
});

router.post('/hash', (req, res) => {
    const { blockchain, index } = req.body;
    const newBlockchain = blockchainHash(blockchain, index, BlockModel);
    res.json(newBlockchain);
});

router.post('/mine', (req, res) => {
    const { blockchain, index } = req.body;
    const newBlockchain = blockchainMine(blockchain, index, BlockModel);
    res.json(newBlockchain);
});

module.exports = router;