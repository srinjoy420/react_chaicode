import {createContext,useContext} from 'react';
export const languageContext=createContext({
    language:'en',
    setLanguage:()=>{}
});

export const useLanguage=()=>{
    return useContext(languageContext)
}

export const languageProvider=languageContext.Provider
