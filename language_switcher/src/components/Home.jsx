import React from 'react'
import { useLanguage } from '../contexts/LanguageContext.js'
import { translations } from '../data/translations.js'



const Home = () => {
    const{language}=useLanguage()
    const text=translations[language]
  return (
    <div>
        <h1>{text.welcome}</h1>
        <h2>{text.description}</h2>
    </div>
  )
}

export default Home