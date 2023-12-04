import React from 'react'

const json = [{
    name: 'juan',
    lastName: 'perez',
    model: 'Porshe Carrera GT',
    year: '2017',
    trip: '20945',
    price: '200000'
},
{
    name: 'israel',
    lastName: 'flores',
    model: 'Mitsubishi Lancer Evo 7',
    year: '2015',
    trip: '54502',
    price: '150000'
}]

const handleAdd = () => {

}

const handleBuy = (block) => {

}

function Blockchain() {
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
                        {json.map((block, index) => (
                            <tr className="bg-white border-b" key={index + 1}>
                                <td className="py-3 px-1 text-center">{index + 1}</td>
                                <td className="py-3 px-6 font-medium text-gray-900">
                                    {block.hash}
                                </td>
                                <td className="py-3 px-6 font-medium text-gray-900">
                                    {block.name}
                                </td>
                                <td className="py-3 px-6">
                                    {block.lastName}
                                </td>
                                <td className="py-3 px-6">
                                    {block.model}
                                </td>
                                <td className="py-3 px-6">
                                    {block.price}
                                </td>
                                <td className="py-3 px-6">
                                    {block.trip}
                                </td>
                                <td className="py-3 px-6">
                                    {block.year}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleBuy(block)}
                                        className="btn-delivery"
                                    >
                                        Comprar
                                    </button>
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