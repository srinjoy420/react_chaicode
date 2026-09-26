import React, { useState } from 'react'
import { UserProvider } from './contexts/UpdateUserContext'
import Navbar from './pages/Navbar'
import UpdateUser from './pages/UpdateUser'
import {Router,Routes,Route,useNavigate} from "react-router"
import Profile from './pages/Profile'

const App = () => {
  const [user,setUser]=useState(null)
  const navigate=useNavigate()
  const updateUser=(userData)=>{
    setUser((prev)=>({
      ...prev,
      ...userData
    }))

  }
  return (
    <UserProvider value={{user,updateUser}}>
      <Navbar/>
      <UpdateUser/>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <br/>
      <button onClick={() => navigate('/profile')}>My profile</button>
    </UserProvider>
  )
}

export default App
