import React from 'react'

import axios from 'axios'

import { useLocation, useNavigate } from 'react-router-dom'

import { appContext } from '../AuthContext/AuthContextProvider'

import { useContext } from 'react'

let initialstate = {
    email: "eve.holt@reqres.in",
    password: 'cityslicka'
}



const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case 'email': {
            return {
                ...state,
                email: payload
            }
        }
        case 'pass': {
            return {
                ...state,
                password: payload
            }
        }

        case 'reset': {
            return {
                ...initialstate
            }
        }
        default: {
            throw new Error('Error')
        }
    }
}


function Login() {

    const {handleAuth} = useContext(appContext);


    const location = useLocation()


    const navigate = useNavigate()

    const [state, dispatch] = React.useReducer(reducer, initialstate);

    const handleloginsubmit = (e) => {
        e.preventDefault()

        axios({
            method: 'POST',
            url: `https://reqres.in/api/login`,
            data: state
        }).then((res) => {
            console.log(res.data)
            handleAuth()
            navigate(location.state, {replace:true})
           
        }).catch((err) => {
            console.log(err)
        })


    }

    const { email, password } = state;

    return (
        <>

            <form onSubmit={handleloginsubmit}>
                <input type="text" placeholder='email' value={email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} />
                <input type="password" placeholder='password' value={password} onChange={(e) => dispatch({ type: 'pass', payload: e.target.value })} />
                <button type='submit'>Login</button>
            </form>

        </>
    )
}

export default Login
