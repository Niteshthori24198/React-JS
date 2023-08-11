
import data from '../db2.json'

console.log(data)

export default function Car(){
    return (<div>

        {

            data.data.map((car,i)=>{
                return <div key={i}>

                <img src={car.image} alt="Car" style={{borderRadius:'20%' , width:'400px'}} />
                <p>{car.name}</p>
                
                </div>
            })

        }


</div>)
}