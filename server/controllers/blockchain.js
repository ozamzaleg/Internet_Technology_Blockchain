const fs = require('fs');
const { Blockchain } = require('../blockchain/blockchain');
const { Blockchain: Tokens } = require('../blockchain/tokens');
const { Blockchain: Coinbase } = require('../blockchain/coinbase');
const { Blockchain: FullBlockchain } = require('../blockchain/fullBlockchain');
const BlockModel = require('../models/block');
const TokenModel = require('../models/token');
const CoinbaseModel = require('../models/coinbase');
const FullBlockchainModel = require('../models/fullBlock');
const { blockchainTypes, filesFolder } = require('../constants/blockchain-types');

const blockchainType = (blockchain, model) => {
    let newBlockchain;

    switch (model) {
        case BlockModel:
            newBlockchain = new Blockchain(blockchain);
            break;
        case TokenModel:
            newBlockchain = new Tokens(blockchain);
            break;
        case CoinbaseModel:
            newBlockchain = new Coinbase(blockchain);
            break;
        case FullBlockchainModel:
            newBlockchain = new FullBlockchain(blockchain);
            break;
    }

    return newBlockchain;
}

exports.fetchBlockchain = async model => {
    const blockchainFromDB = await model.find();
    const newBlockchain = blockchainType(blockchainFromDB, model);

    for (let i = 0; i < newBlockchain.chain.length; i++) {
        newBlockchain.chain[i] = { ...newBlockchain.chain[i]._doc, validHash: newBlockchain.chain[i].hash };
    }

    return newBlockchain;
}

exports.fetchDistributed = async model => {
    const blockchain = await this.fetchBlockchain(model);
    let distributed = {};

    for (let i = 0; i < blockchainTypes.NUMBER_OF_PEERS; i++) {
        distributed[i] = blockchain.chain;
    }
    
    return distributed;
};

exports.blockchainHash = (blockchain, index, model) => {
    const blockchainHash = blockchainType(blockchain, model);
    blockchainHash.calculateBlocksHash(index);

    return blockchainHash.chain;
};

exports.blockchainMine = (blockchain, index, model) => {
    const blockchainHash = blockchainType(blockchain, model);
    blockchainHash.mineBlockCalculateHash(index);

    return blockchainHash.chain;
};

exports.distributedHash = (distributed, peer, index, model) => {
    const blockchainHash = this.blockchainHash(distributed[peer], index, model);
    distributed[peer] = blockchainHash;

    return distributed;
};

exports.distributedMine = (distributed, peer, index, model) => {
    const blockchainHash = this.blockchainMine(distributed[peer], index, model);
    distributed[peer] = blockchainHash;

    return distributed;
};

exports.importDataFromFile = async (model, fileName) => {
    const count = await model.countDocuments().exec();
     
    if (count === 0) {
        fs.readFile(filesFolder + fileName, 'utf8', async (err, data) => {
            await model.insertMany(JSON.parse(data));
        });
    }
}