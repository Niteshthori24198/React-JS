
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContextProvider'

import { useContext } from 'react'


export default function PrivateRoute({ children }) {

    const { isAuth } = useContext(AuthContext)

    if (!isAuth) {
        return <Navigate to={"/login"} />
    }

    return children

}