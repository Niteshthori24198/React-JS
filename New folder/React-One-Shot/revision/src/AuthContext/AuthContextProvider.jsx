
import React from 'react'


export const appContext = React.createContext()


function AuthContextProvider({ children }) {

    const [isAuth, setisAuth] = React.useState(false);

    const handleAuth = () => {

        setisAuth(!isAuth)

    }

    

    return (

        <appContext.Provider value={{isAuth ,  handleAuth}}>

            {children}

        </appContext.Provider>

    )
}

export default AuthContextProvider
