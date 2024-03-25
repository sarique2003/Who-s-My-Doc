import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='' element={<SignUp />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
