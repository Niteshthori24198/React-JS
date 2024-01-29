import React from 'react'

function UseCounter() {

    const [count, setCount] = React.useState(0);

    const func = (val) => {
        setCount((prev) => prev + val);
    }

    return [count, func]
}

export default UseCounter
