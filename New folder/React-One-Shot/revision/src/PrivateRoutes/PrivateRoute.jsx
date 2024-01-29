import React from 'react'

import { appContext } from '../AuthContext/AuthContextProvider'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { isAuth } = useContext(appContext);

    const location = useLocation()

    console.log(location)

    return (
        <>
            {
                isAuth ? children : <Navigate state={location.pathname} replace={true} to={"/Login"} />
            }

        </>
    )
}

export default PrivateRoute
