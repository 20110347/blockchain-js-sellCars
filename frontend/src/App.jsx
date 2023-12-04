import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Blockchain from './components/Blockchain'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to={'/blockchain'} />} />
      <Route path="/blockchain" element={<Blockchain />} />
    </Routes>
  )
}

export default App
