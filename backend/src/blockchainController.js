const asyncHandler = require("express-async-handler");
const Blockchain = require('./blockchain')
const Block = require('./block')

const blockchain = new Blockchain();

// const json = {
//     name: 'juan',
//     lastName: 'perez',
//     model: 'BMW M3 GTR',
//     year: '2005',
//     trip: '20945',
//     price: '200000',
//     date: '04/12/2023, 11:53:28 am'
// }

// const block = new Block({ data: json })
// blockchain.addBlock(block)

exports.createNewBlock = asyncHandler(async (req, res) => {

    try {
        const block = new Block({data: req.body})
        const response = await blockchain.addBlock(block);

        res.status(200).json(response)

    } catch (e) {
        res.status(500).json({ msg: e.message });
    }
})

exports.getBlockchain = asyncHandler(async (req, res) => {

    try {
        const response = await blockchain.returnData();
        console.log(response)

        res.status(200).json(response)

    } catch (e) {
        res.status(500).json({ msg: e.message });
    }
})

exports.getLatestBlock = asyncHandler(async (req, res) => {

    try {
        const response = await blockchain.getLastestBlock();
        console.log(response)
        res.status(200).json(response)
    } catch (e) {
        res.status(500).json({ msg: e.message });
    }
})