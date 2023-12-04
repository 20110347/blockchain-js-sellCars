const asyncHandler = require("express-async-handler");
const Blockchain = require('./blockchain')
const Block = require('./block')

const blockchain = new Blockchain();

const json = {
    name: 'juan',
    lastName: 'perez',
    model: 'Porshe Carrera GT',
    year: '2017',
    trip: '20945',
    price: '200000'
}
const json2 = {
    name: 'israel',
    lastName: 'flores',
    model: 'Mitsubishi Lancer Evo 7',
    year: '2015',
    trip: '54502',
    price: '150000'
}
const block1 = new Block({ data: json })
blockchain.addBlock(block1)
const block2 = new Block({ data: json2 })
blockchain.addBlock(block2)
blockchain.print()


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