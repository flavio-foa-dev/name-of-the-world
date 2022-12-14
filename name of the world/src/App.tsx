import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
