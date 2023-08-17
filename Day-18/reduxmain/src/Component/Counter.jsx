
import { useState } from 'react'
import { addAction } from '../redux/action'
import { store } from '../redux/store'

function Counter() {

    const {getState,dispatch, subscribe} = store
    
    const [counterdata, setcounterdata] = useState(0)
    
    // it basically used to connect our redux to React.DIspatch method so we can notify react regarding updates.

    subscribe(()=>{
        setcounterdata((prev)=>prev+1)
    })


    const handleAdd = ()=>{

        dispatch(addAction())
        
    }




    return (
        <>

            <p>counter : {getState().counter}</p>
            <button onClick={handleAdd}>Inc</button>

        </>

    )
}

export default Counter


// setcount : -> controller
// count : - state [model] 
// button : - view