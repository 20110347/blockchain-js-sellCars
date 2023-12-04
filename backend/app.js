const Blockchain = require('./src/blockchain')
const Block = require('./src/block')
const express = require('express')
const app = express()
const port = 3000

async function run() {
    const blockchain = await new Blockchain()
    const json = {
        name: 'juan',
        lastName: 'perez',
        car: 'Porshe Carrera GT',
        model: '2017',
        trip: '20945',
        price: '200000'
    }
    const json2 = {
        name: 'israel',
        lastName: 'flores',
        car: 'Mitsubishi Lancer Evo 7',
        model: '2015',
        trip: '54502',
        price: '150000'
    }
    const block1 = new Block({ data: json })
    await blockchain.addBlock(block1)
    const block2 = new Block({ data: json2 })
    await blockchain.addBlock(block2)

    const data = blockchain.returnData()

    app.listen(port, () => console.info(`Running on http://localhost:${port}`))
}

run()
