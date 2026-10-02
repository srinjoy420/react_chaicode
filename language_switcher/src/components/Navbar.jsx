import React from 'react'
import { useLanguage } from '../contexts/LanguageContext.js'


const Navbar = () => {
    const {language,setLanguage}=useLanguage()
  return (
    <div>
        <h1>My languages</h1>
        <button onClick={()=>setLanguage('en')}>
            English
        </button>
        <button onClick={()=>setLanguage('hi')}>
            Hindi
        </button>
        <button onClick={()=>setLanguage('bn')}>
            Bengali
        </button>

        <h3>Current Language {language}</h3>
    </div>
  )
}

export default Navbar