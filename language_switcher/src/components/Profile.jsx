import React from 'react'
import { useLanguage } from '../contexts/LanguageContext.js'
import { translations } from '../data/translations.js'
const Profile = () => {
    const { language } = useLanguage()
    const text = translations[language]
    return (
        <div>
            <h1>{text.profile}</h1>

            <p>{text.name}:srinjoy</p>
        </div>
    )
}

export default Profile