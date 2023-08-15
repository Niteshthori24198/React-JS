import React from 'react'

function fun(val) {
    if (val === 'forward') {
        return 0;
    }
    return 100;
}


function Kishan({ start }) {

    const value = React.useState(fun(start))

    const count = value[0]

    const setcount = value[1]

    const handleclick = (val)=>{
        setcount((prev)=>{
            return prev+val;
        })
    }

    return (
        <div>
            <p>Counter value :  {count}</p>
            <button onClick={() => handleclick(-1)}>Dec</button>
            <button onClick={() => handleclick(1)}>Inc</button>
        </div>
    )
}

export default Kishan
