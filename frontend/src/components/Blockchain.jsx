import { useState, React, useEffect } from 'react'
import { Modal, Form, Flex } from 'antd';
import useSWR from 'swr'
import api from '../api/api'

function Blockchain() {

    const [blocks, setBlocks] = useState([])

    const [selectedBlock, setSelectedBlock] = useState({})
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [trip, setTrip] = useState()
    const [price, setPrice] = useState()

    const fetcher = async () => {
        const response = await api.get("/blockChain");
        return response.data;
    };

    const { data, error, isLoading } = useSWR('/api/blockChain', fetcher)

    if (error) return <div>Hubo un error al obtener los datos</div>
    if (isLoading) return <div>Cargando...</div>
    
    useEffect (() => {
        if(data){
            setBlocks(data)
        }
    }, [data])

    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = (block) => {
        setSelectedBlock(block)
        console.log(block)
        setVisible(true)
    }

    const handleSubmit = async () => {
        try {
            await api.post('/newBlock', {
                name: name,
                lastName: lastName,
                model: selectedBlock.body.data.model,
                year: selectedBlock.body.data.year,
                trip: trip,
                price: price
            })
            setVisible(false)
        }catch(err){console.error(err)}
    }

    const handleCancel = () => {
        setVisible(false)
        form.resetFields()
    };

    return (
        <div>
            <h1>Lista de Blockchain</h1>
            <div className="table">
                <table className="w-full table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th className="">No.</th>
                            <th className="">Hash</th>
                            <th className="">Nombre</th>
                            <th className="">Apellido</th>
                            <th className="">Modelo</th>
                            <th className="">Precio</th>
                            <th className="">Kilometraje</th>
                            <th className="">Año</th>
                            <th className="">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blocks.map((block, index) => (
                            <tr className="bg-white border-b" key={index + 1}>
                                <td className="py-3 px-1 text-center">{index + 1}</td>
                                <td className="py-3 px-6 font-medium text-gray-900">
                                    {block.hash}
                                </td>
                                <td className="py-3 px-6 font-medium text-gray-900">
                                    {block.body.data.name}
                                </td>
                                <td className="py-3 px-6">
                                    {block.body.data.lastName}
                                </td>
                                <td className="py-3 px-6">
                                    {block.body.data.model}
                                </td>
                                <td className="py-3 px-6">
                                    ${block.body.data.price}
                                </td>
                                <td className="py-3 px-6">
                                    {block.body.data.trip}
                                </td>
                                <td className="py-3 px-6">
                                    {block.body.data.year}
                                </td>
                                <td>
                                    <button
                                        onClick={() => showModal(block)}
                                        className="btn-delivery"
                                    >
                                        Comprar
                                    </button>
                                    <Modal open={visible} onOk={form.submit} onCancel={handleCancel}>
                                        <Form form={form} onFinish={() => handleSubmit()} styles={Flex}>
                                            <label>Nombre</label>
                                            <input type="text" onChange={e => setName(e.target.value)}/>
                                            <label>Apellido</label>
                                            <input type="text" onChange={e => setLastName(e.target.value)}/>
                                            <label>Modelo</label>
                                            <h4>{block.body.data.model}</h4>
                                            <label>Año</label>
                                            <h4>{block.body.data.year}</h4>
                                            <label>Kilometraje</label>
                                            <input type="text" onChange={e => setTrip(e.target.value)}/>
                                            <label>Precio</label>
                                            <input type="number" onChange={e => setPrice(e.target.value)}/>
                                        </Form>
                                    </Modal>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Blockchain