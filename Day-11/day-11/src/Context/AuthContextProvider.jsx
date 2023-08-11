import React, { createContext } from "react";

import { Navigate } from "react-router-dom"

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {


    const [isAuth, setisAuth] = React.useState(false)

    const handlelogin = () => {
        setisAuth(!isAuth);
        <Navigate to="/" />
    }

    return <AuthContext.Provider value={{ isAuth, handlelogin }}>

        {children}

    </AuthContext.Provider>

}