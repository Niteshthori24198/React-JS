import React, { useReducer } from 'react'

import { Reducer } from './Reducer';

const initialvalue = 0;


function ReducerCount() {

    const [state, dispatch] = useReducer(Reducer, initialvalue)

    const handleclick = (val) => {
        
        dispatch(()=>{
            return [state,val]
        })
        
    }

    return (
        <div>
            <h4>Reducer wala Counter : {state}</h4>
            <button onClick={() => handleclick(-1)}>Piche karo</button>
            <button onClick={() => handleclick(1)}>Aage karo</button>
        </div>

    )
}

export default ReducerCount
