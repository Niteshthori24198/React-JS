
import { useContext } from "react"

import { Navigate } from "react-router-dom"

import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {

    const { isAuth, handlelogin } = useContext(AuthContext)

    console.log(isAuth, handlelogin)

    const handleclick = () => {
        handlelogin()
    }

    return (!isAuth?<div>
        <h2>Welcome to Login Page</h2>
        <button onClick={handleclick}>Click Here to Login</button>
    </div>:<Navigate to="/" />)
}