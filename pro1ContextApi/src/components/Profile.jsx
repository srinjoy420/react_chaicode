import React,{useContext} from 'react'
import UserContext from '../context/UserContext.js'



const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return <h3>Please login</h3>
  return (
    <div>
        welcome {user.username}
    </div>
  )
}

export default Profile