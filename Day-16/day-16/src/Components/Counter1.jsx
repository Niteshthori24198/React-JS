import React from 'react'
import useCounter from '../Hooks/useCounter'

function Counter1() {

    const [count , setCount] = useCounter()



    return (
    <div>
        <h2>Counter-1 : {count}</h2>
        <button onClick={()=>setCount(1)}>Inc</button>
        <button onClick={()=>setCount(-1)}>Dec</button>
    </div>    
    )
}

export default Counter1
