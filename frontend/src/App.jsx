import { Routes, Route, Navigate } from "react-router-dom"
import Blockchain from './components/Blockchain'
import AddBlock from './components/AddBlock'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to={'/blockChain'} />} />
      <Route name='BlockChain' path="/blockChain" element={<Blockchain />} />
      <Route name='AddBlock' path="/addBlock" element={<AddBlock/>} />
    </Routes>
  )
}

export default App
