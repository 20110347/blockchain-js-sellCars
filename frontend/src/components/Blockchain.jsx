import { React } from 'react'
import { useNavigate } from "react-router-dom";
import useSWR from 'swr'
import api from '../api/api'

function Blockchain() {

    const navigate = useNavigate()

    const fetcher = async () => {
        const response = await api.get("/blockChain");
        return response.data;
    };

    const { data, error, isLoading } = useSWR('/api/blockChain', fetcher)

    if (error) return <div>Hubo un error al obtener los datos</div>
    if (isLoading) return <div>Cargando...</div>

    // useEffect (() => {
    //     if(data){
    //         setBlocks(data)
    //     }
    // }, [data])

    // const [visible, setVisible] = useState(false);
    // const [form] = Form.useForm();

    // const showModal = (block) => {
    //     setSelectedBlock(block)
    //     console.log(block)
    //     setVisible(true)
    // }

    // const handleSubmit = async () => {
    //     try {
    //         const block = await api.post('/newBlock', {
    //             name: name,
    //             lastName: lastName,
    //             model: selectedBlock.body.data.model,
    //             year: selectedBlock.body.data.year,
    //             trip: trip,
    //             price: price
    //         })
    //         setVisible(false)
    //     }catch(err){console.error(err)}
    // }

    // const handleCancel = () => {
    //     setVisible(false)
    //     form.resetFields()
    // };

    const handleBuy = async () => {
        const res = await api.get('/lastBlock')
        console.log(res.data)
        navigate('/addBlock', {state: res.data})
    }

    return (
        <div className='container'>
            <h1>Lista de Blockchain</h1>
            <div className="table">
                <button
                    onClick={handleBuy}
                    className="btn-delivery"
                >
                    Comprar
                </button>
                <table className="w-full table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th className="index">No.</th>
                            <th className="hash">Hash</th>
                            <th className="name">Nombre</th>
                            <th className="lastName">Apellido</th>
                            <th className="model">Modelo</th>
                            <th className="price">Precio</th>
                            <th className="trip">Kilometraje</th>
                            <th className="year">Año</th>
                            <th className="date">Fecha de Compra</th>
                            <th className='hash'>Hash Anterior</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((block, index) => (
                            <tr className="bg-white border-b" key={index + 1}>
                                <td className="py-3 px-1 text-center">{index + 1}</td>
                                <td className="body-hash">
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
                                    {block.body.data.date}
                                </td>
                                <td
                                    className='body-hash'>
                                    {block.previousBlockHash}
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