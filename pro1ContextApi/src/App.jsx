import React from 'react'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <h1>Welcome to useContext Api</h1>
        <Login />
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App