

//step : 3 : consume context : -> we need useContext hook and a"ppcontext" to consume information

import React, {useContext} from 'react'

import {appcontext} from '../Context'



export default function Rightnav(){

    const {language,handleupdatelanguage} = useContext(appcontext)

    const [inplang, setinplang] = React.useState('')

    const handlechange = ()=>{
        handleupdatelanguage(inplang)
    }

    return <div>
        <span>Language : {language}</span>
        <input placeholder='enter language' value={inplang} onChange={(e)=>setinplang(e.target.value)} />
        <button onClick={handlechange}>Change Language</button>
    </div>
}