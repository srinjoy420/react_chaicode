import React from 'react'
import { useUser } from '../contexts/UpdateUserContext.js'


const Navbar = () => {
    const {user}=useUser()
  return (
    <div>
        <h1>My Profile</h1>
        <div>
           {user ? <p>
            welcome {user?.name}
           </p>:<p>Wlcome guest</p>}
        </div>
    </div>
  )
}

export default Navbar