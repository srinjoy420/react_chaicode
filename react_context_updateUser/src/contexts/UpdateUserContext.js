import {createContext,useContext} from "react"

export const UserContext=createContext({
    user:null,
    updateUser:()=>{}
})
export const useUser=()=>{
    return useContext(UserContext)
}

export const UserProvider=UserContext.Provider