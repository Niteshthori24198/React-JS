import React from 'react'
import useCounter from '../Hooks/useCounter'
import useTimer from '../Hooks/useTimer'

function Counter2() {


    const [count, setCount] = useCounter()

    const show = useTimer(5000)


    return <>
        {show && <div>
            <h2>Counter-2 : {count}</h2>
            <button onClick={() => setCount(1)}>Inc</button>
            <button onClick={() => setCount(-1)}>Dec</button>
        </div>
        }
    </>

}

export default Counter2
