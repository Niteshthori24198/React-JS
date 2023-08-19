import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addcounterAction } from '../Redux/Counter/action'

function Counter() {

    const counter = useSelector((state) => state.Counterreducer.counter)
    

    const dispatch = useDispatch()

    const handleAdd = () => {

        dispatch(addcounterAction(1))

    }

    console.log('Re-Render counter')

    return (
        <div>
            <p>counter : { counter}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Counter
