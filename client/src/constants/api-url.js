const API_SERVER = 'http://localhost:8080';

const api = {
    BLOCK: API_SERVER + '/block',
    BLOCKCHAIN: API_SERVER + '/blockchain',
    DISTRIBUTED: API_SERVER + '/distributed',
    TOKENS: API_SERVER + '/tokens',
    COINBASE: API_SERVER + '/coinbase',
    FULL_BLOCKCHAIN: API_SERVER + '/fullBlockchain',
    KEYS: API_SERVER + '/keys',
    MINE: '/mine',
    HASH: '/hash'
};

export const apiBlock = {
    HASH: api.BLOCK + api.HASH,
    BLOCK_MINE: api.BLOCK + '/blockMine',
    BLOCK_HASH: api.BLOCK + '/blockHash',
}

export const apiBlockchain = {
    FETCH: api.BLOCKCHAIN + '/fetchBlockchain',
    MINE: api.BLOCKCHAIN + api.MINE,
    HASH: api.BLOCKCHAIN + api.HASH
}

export const apiDistributed = {
    FETCH: api.DISTRIBUTED + '/fetchDistributed',
    MINE: api.DISTRIBUTED + api.MINE,
    HASH: api.DISTRIBUTED + api.HASH
}

export const apiTokens = {
    FETCH: api.TOKENS + '/fetchTokens',
    MINE: api.TOKENS + api.MINE,
    HASH: api.TOKENS + api.HASH
}

export const apiCoinbase = {
    FETCH: api.COINBASE + '/fetchCoinbase',
    MINE: api.COINBASE + api.MINE,
    HASH: api.COINBASE + api.HASH
}

export const apiFullBlockchain = {
    FETCH: api.FULL_BLOCKCHAIN + '/fetchFullBlockchain',
    MINE: api.FULL_BLOCKCHAIN + api.MINE,
    HASH: api.FULL_BLOCKCHAIN + api.HASH
}

export const apiKeys = {
    FETCH_PUBLIC_KEY: api.KEYS + '/fetchPublicKey',
    SIGN_MESSAGE: api.KEYS + '/signMessage',
    VERIFY_MESSAGE: api.KEYS + '/verifyMessage',
    SIGN_TRANSACTIONS: api.KEYS + '/signTransactions',
    VERIFY_TRANSACTIONS: api.KEYS + '/verifyTransactions'
}