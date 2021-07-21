const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { TransactionHash } = require('./transactionHash');

const privateKeyToPublic = privateKey => {
    var key;

    if (privateKey === '' || Number(privateKey) === 0)
        key = ec.genKeyPair();
    else
        key = ec.keyFromPrivate(privateKey);

    const publicKey = key.getPublic('hex');

    return publicKey;
}

const signMessage = (message, privateKey) => {
    const key = ec.keyFromPrivate(privateKey);
    const signature = key.sign(message, 'base64');

    return signature.toDER('hex');
}

const verifyMessage = (message, publicKey, signature) => {
    try {
        const key = ec.keyFromPublic(publicKey, 'hex');
    
        return key.verify(message, signature);
    } catch {
        return false;
    }
}

const signTransaction = (transaction, privateKey) => {
    const transactionHash = new TransactionHash(transaction.amount, transaction.from, transaction.to);
    transactionHash.hash = transactionHash.calculateHash();
    const signature = signMessage(transactionHash.hash, privateKey);

    return signature;
}

const verifyTransaction = (transaction, publicKey, signature) => {
    const transactionHash = new TransactionHash(transaction.amount, transaction.from, transaction.to);
    transactionHash.hash = transactionHash.calculateHash();
    const verify = verifyMessage(transactionHash.hash, publicKey, signature);

    return verify;
}

module.exports.privateKeyToPublic = privateKeyToPublic;
module.exports.signMessage = signMessage;
module.exports.verifyMessage = verifyMessage;
module.exports.signTransaction = signTransaction;
module.exports.verifyTransaction = verifyTransaction;