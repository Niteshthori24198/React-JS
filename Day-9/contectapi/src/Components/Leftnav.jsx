
import {Countercontext} from '../Countercontext'

import {useContext} from 'react'
import Button from './Button'

export default function Leftnav(){

    const {count,handleupdatecount} = useContext(Countercontext)

    const handlechange = (val)=>{
        handleupdatecount(val)
    }

    return <div>
        <p>count : {count}</p>
        <Button btntext="Inc" handlechange={handlechange}/>
        <Button btntext="Dec" handlechange={handlechange} />
    </div>
}