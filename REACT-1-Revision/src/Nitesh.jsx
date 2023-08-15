import React from 'react'

function Nitesh() {


    const [count , setcount] = React.useState({ counter: 0 })
    const handleclick = (val)=>{
        setcount((prev)=>{
            return {
                ...prev,
                counter:prev.counter+val
            }
        })
       
    }

    return (
        <div>
            <h2>Count : {count.counter}</h2>
            <button onClick={()=>handleclick(1)}>Inc</button>
            <button onClick={()=>handleclick(-1)}>Dec</button>
        </div>
        
    )
}

export default Nitesh
