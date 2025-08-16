import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { userDataContext } from './context/UserContext'

const App = () => {
  const {userData} = useContext(userDataContext);
  return (
    <>
      {userData&&<Navbar/>}
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App