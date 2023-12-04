import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from "react"
import Blockchain from './components/Blockchain'
import AddBlock from './components/AddBlock'
import api from './api/api'

function App() {

  useEffect(() => {
    const firstBlock = localStorage.getItem('firstBlock') ? localStorage.getItem('firstBlock') : false
    if (!firstBlock) {
      api.post('/newBlock', {
        name: 'juan',
        lastName: 'perez',
        model: 'BMW M3 GTR',
        year: '2005',
        trip: '20945',
        price: '200000',
        date: '04/12/2023, 11:53:28 am'
      })
      localStorage.setItem('firstBlock', true)
    }
  })

  return (
    <Routes>
      <Route index element={<Navigate to={'/blockChain'} />} />
      <Route name='BlockChain' path="/blockChain" element={<Blockchain />} />
      <Route name='AddBlock' path="/addBlock" element={<AddBlock />} />
    </Routes>
  )
}

export default App
