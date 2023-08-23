import React from 'react'

import styled from 'styled-components'

import { loginUser } from '../Redux/AuthComponent/action'

import { AppState, useAppDispatch, useAppSelector } from '../Redux/store'


export interface userloginform {
    email: string,
    password: string
}


interface Props {
    auth: string;
}

function Login() {

    const dispatch = useAppDispatch()


    const auth = useAppSelector((state: AppState) => state.authReducer.isAuth);

    const initialstate: userloginform = {
        email: "eve.holt@reqres.in",
        password: '1'
    }

    const [loginformdata, setloginformdata] = React.useState<userloginform>(initialstate);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(loginUser(loginformdata))

    }


    const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{

        const {name,value} = e.target;

        setloginformdata({
            ...loginformdata,
            [name]:value
        })

    }

    return (

        
        <WRAPPER auth={`${auth}`} onSubmit={handleSubmit}>

            <h2>{auth?"Login Successfull":"Login to Continue"}</h2>

            <input disabled={true} type="email" placeholder='Enter email' name='email' value={loginformdata.email} onChange={(e) => handlechange(e)} />
            <input disabled={true} type="password" placeholder='Enter Password' name='password' value={ loginformdata.password} onChange={(e) => handlechange(e)} />
            <input type="submit" value="Login" />

        </WRAPPER>

    )
}

export default Login


const WRAPPER = styled.form<Props>`
    
    border: 1px solid gray;
    width: 30%;
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    gap:15px;
    padding: 15px;

    h2{
        color:${({auth})=>(auth==="true"?"green":"red")}
    }

    input{
        width: 90%;
        border: 1px solid gray;
        outline: none;
        border-radius: 7px;
        height: 30px;
        text-align: center;
        margin:auto;
    }
    input:nth-child(4){
        background-color: #007bff;
        color:white;
        font-size: 18px;
    }
    input:nth-child(4):hover{
        color: #007bff;
        background-color:white;
        cursor: pointer;
        letter-spacing:2px;
    }

`
