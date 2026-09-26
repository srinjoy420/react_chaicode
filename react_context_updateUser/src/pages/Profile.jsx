import React from 'react'
import { useUser } from '../contexts/UpdateUserContext.js'


const Profile = () => {
    const{user}=useUser()
  return (
    <div>
        <h1>My profile</h1>
        <p>{user?.name}</p>
         <p>{user?.email}</p>
          <p>{user?.bio}</p>
        

    </div>
  )
}

export default Profile