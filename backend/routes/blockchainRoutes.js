import express from 'express';

import{
    getBlockchain,
    createNewBlock
} from "../src/blockchainController.js";

const router = express.Router();

router.get('/blockChain', getBlockchain);
router.post('/newBlock', createNewBlock);

export default router;