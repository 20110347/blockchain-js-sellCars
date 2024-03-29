const express = require('express')

const blockChainController = require('../src/blockchainController')

const router = express.Router();

router.get('/blockChain', blockChainController.getBlockchain);
router.get('/lastBlock', blockChainController.getLatestBlock);
router.post('/newBlock', blockChainController.createNewBlock);

module.exports = router;