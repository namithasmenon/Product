import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Add from '../components/Add'
import Dash from '../components/Dash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path={'/'}element={<Dash/>}>Dash</Route>
        <Route path={'/add'}element={<Add/>}>Add</Route>
  </Routes>
    </>
  )
}

export default App
