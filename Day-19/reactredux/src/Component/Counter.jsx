import React from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addcounterAction } from '../Redux/action'

function Counter() {

    const counter = useSelector((state) => state.counter)

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
