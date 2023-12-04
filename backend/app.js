const express = require('express')
const cors = require('cors');
const blockChainRoute = require('./routes/blockchainRoutes')
const app = express()
app.use(cors());
app.use(express.json());
const port = 5000

app.use(blockChainRoute)

app.listen(port, () => console.info(`Running on http://localhost:${port}`))