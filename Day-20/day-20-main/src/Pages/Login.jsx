import axios from 'axios'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { LoginRequestAction, LoginRequestFailAction, LoginRequestSuccessAction } from '../Redux/Auth/action'

function Login() {

    const [email, setemail] = useState('')

    const [pass, setpass] = useState('')


    const diapatch = useDispatch()


    const handlelogin = () => {

        diapatch(LoginRequestAction())

        axios({
            url: 'https://reqres.in/api/login',
            method: 'post',
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        })
            .then((res) => {
                console.log("token",res.data.token)
                diapatch(LoginRequestSuccessAction(res.data.token))

            })
            .catch((err) => {
                diapatch(LoginRequestFailAction())
            })

    }


    return (
        <div>

            <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='pass' value={pass} onChange={(e) => setpass(e.target.value)} />
            <button onClick={handlelogin}>Login</button>

        </div>
    )
}

export default Login
