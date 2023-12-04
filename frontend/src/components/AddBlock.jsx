import { React, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment'
import api from '../api/api'

function AddBlock() {

    const { state } = useLocation();
    const navigate = useNavigate()

    const block = state
    const [name, setName] = useState(block.body.data.name)
    const [lastName, setLastName] = useState(block.body.data.lastName)
    const [trip, setTrip] = useState(block.body.data.trip)
    const [price, setPrice] = useState(block.body.data.price)
    const date = moment().format('DD/MM/YYYY, h:mm:ss a')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/newBlock', {
                name: name,
                lastName: lastName,
                model: block.body.data.model,
                year: block.body.data.year,
                trip: trip,
                price: price,
                date: date
            })
            // res.status(200) ? console.log('Todo Bien') : console.error('MAL')
            navigate('/blockChain')
        } catch (err) { console.error(err) }
    }

    return (
        <div className='gradient-border' id='box'>
            <form onSubmit={handleSubmit}>

                <label htmlFor="date">Fecha Anterior de Compra</label>
                <h4 id="date">{block.body.data.date}</h4>

                <label htmlFor="model">Modelo</label>
                <h4 id="model">{block.body.data.model}</h4>

                <label htmlFor="year">Año</label>
                <h4 id="year">{block.body.data.year}</h4>

                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="lastName">Apellido</label>
                <input type="text" id='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />

                <label htmlFor="trip">Kilometraje</label>
                <input type="number" id='trip' value={trip} onChange={e => setTrip(e.target.value)} />

                <label htmlFor="price">Precio</label>
                <input type="number" id='price' value={price} onChange={e => setPrice(e.target.value)} />
                
                <div className='box-btns'>
                    <button
                        type='submit'
                        className="btn-delivery"
                        id='btn-confirm'
                    >
                        Comprar
                    </button>
                    <button
                        className="btn-delivery"
                        id='btn-denied'
                        onClick={() => navigate('/blockChain')}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddBlock