import React, { createContext } from 'react'
export const authDataContext = createContext()


const AuthContext = ({children}) => {
    let serverURL = "http://localhost:8000"
    let value={
        serverURL
    }
    return (
    <authDataContext.Provider value={value}>
        {children}
    </authDataContext.Provider>
  )
}

export default AuthContext