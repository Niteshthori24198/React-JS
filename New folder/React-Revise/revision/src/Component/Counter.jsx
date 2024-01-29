import React from 'react'
import UseCounter from '../Hooks/useCounter'

function Counter() {

    const [count, setCount] = UseCounter()

    return (
        <>
            <h2>Counter : - {count}</h2>
            <button onClick={() => setCount(1)}>Inc</button>
            <button onClick={() => setCount(-1)}>Dec</button>
        </>
    )
}

export default Counter
