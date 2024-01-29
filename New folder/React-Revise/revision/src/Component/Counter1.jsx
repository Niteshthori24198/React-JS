import React from 'react'
import UseCounter from '../Hooks/useCounter'

function Counter1() {

    const [count, setCount] = UseCounter()

    return (
        <>
            <h2>Counter : - {count}</h2>
            <button onClick={() => setCount(5)}>Inc</button>
            <button onClick={() => setCount(-5)}>Dec</button>
        </>
    )


}

export default Counter1
