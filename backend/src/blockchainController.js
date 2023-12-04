import Blockchain from "./blockchain"

const blockchain = new Blockchain();

export const createNewBlock = async (req, res) =>{

    try {

        const response  = await blockchain.addBlock(req.body);

        res.status(200).json(response)
        
    } catch (error) {
        res.status(500).json({ msg: e.message });
    }
}

export const getBlockchain = async (req, res) =>{

    try {

        const response  = blockchain;

        res.status(200).json(response)
        
    } catch (error) {
        res.status(500).json({ msg: e.message });
    }
}
