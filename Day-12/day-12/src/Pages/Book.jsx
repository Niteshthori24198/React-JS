
import data from '../db.json'

import { useParams } from 'react-router-dom'


export default function Book(){

    const {id} = useParams()


    let filterdata = data.data.filter((ele,i)=>ele.id==id)

    return <div style={{display:'flex',justifyContent:'space-evenly',width:'80%',margin:'100px  auto', gap:'50px'}}>

    {
        filterdata.map((ele,i)=>{
            return <div key={ele.id}>
                <img style={{width:'360px',height:'360px',borderRadius:'50%'}} src={ele.image} alt="Russian"/>
                <p>Charge : - {ele.Price} Rs</p>
            </div>

        })
    }

</div>

}