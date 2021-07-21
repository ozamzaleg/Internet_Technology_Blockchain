require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const blockRouter = require('./routers/block.js');
const blockchainRouter = require('./routers/blockchain.js');
const distributedRouter = require('./routers/distributed.js');
const tokensRouter = require('./routers/tokens.js');
const coinbaseRouter = require('./routers/coinbase.js');
const fullBlockchainRouter = require('./routers/fullBlockchain.js');
const keysRouter = require('./routers/keys.js');

mongoose.connect(process.env.DATABASE_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', async () => {
     blockchainRouter.importBlockchain();
     tokensRouter.importTokens();
     coinbaseRouter.importCoinbase()
     fullBlockchainRouter.importFullBlockchain();
     console.log('Connected to Database');
});

app.use(cors());
app.use(express.json());

app.use('/block', blockRouter);
app.use('/blockchain', blockchainRouter);
app.use('/distributed', distributedRouter);
app.use('/tokens', tokensRouter);
app.use('/coinbase', coinbaseRouter);
app.use('/fullBlockchain', fullBlockchainRouter);
app.use('/keys', keysRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server Started'));