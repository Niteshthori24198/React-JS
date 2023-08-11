import data from '../db.json'

import {Link} from 'react-router-dom'

import{ AuthContext} from '../Context/AuthContextProvider'

import { useContext } from 'react'

import { Navigate } from 'react-router-dom'

export default function Product(){

    const value = useContext(AuthContext)
    console.log(value)

    return (
    
        value.isAuth? <div style={{display:'flex',justifyContent:'space-evenly',width:'80%',margin:'100px  auto', gap:'50px'}}>

        {
            data.data.map((ele,i)=>{
                return <div key={i}>
                    <img style={{width:'360px',height:'360px',borderRadius:'50%'}} src={ele.image} alt="Russian"/>
                    <p>Charge : - {ele.Price} Rs</p>
                    <button><Link to={`/book/${i+1}`}>Book Now</Link></button>
                </div>

            })
        }

    </div> : <Navigate to={"/login"} />)

}