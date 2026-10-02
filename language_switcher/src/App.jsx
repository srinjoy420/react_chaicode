import React, { useState } from 'react'
import { languageProvider as LanguageProvider } from './contexts/LanguageContext.js'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'

const App = () => {
  const [language,setLanguage]=useState("en")
  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <Navbar/>
 
      <Home/>
      <Profile/>
    </LanguageProvider>
  )
}

export default App