const express = require('express');
const router = express.Router();
const { privateKeyToPublic, signMessage, verifyMessage, signTransaction, verifyTransaction } = require('../blockchain/keys');

router.post('/fetchPublicKey', (req, res) => {
    const { privateKey } = req.body;
    const publicKey = privateKeyToPublic(privateKey);
    res.json(publicKey);
});

router.post('/signMessage', (req, res) => {
    const { message, privateKey } = req.body;
    const signature = signMessage(message, privateKey);
    res.json(signature);
});

router.post('/verifyMessage', (req, res) => {
    const { message, publicKey, signature } = req.body;
    const verifySignature = verifyMessage(message, publicKey, signature);
    res.json(verifySignature);
});

router.post('/signTransactions', (req, res) => {
    const { transaction, privateKey } = req.body;
    const signature = signTransaction(transaction, privateKey);
    const publicKey = privateKeyToPublic(privateKey);
    res.json({ publicKey, signature });
});

router.post('/verifyTransactions', (req, res) => {
    const { transaction, signature } = req.body;
    const verifySignature = verifyTransaction(transaction, transaction.from, signature);
    res.json(verifySignature);
});

module.exports = router;