import React from "react"

function Counter() {

    const [count, setcount] = React.useState(0);

    const [newcount, setnewcount] = React.useState(0)


    const handleIncCount = () => {
        setcount(count + 10);
        setcount(count + 10);

        setTimeout(()=>{
            console.log("count : ",count)
        },5000)

        // it always takes value from the shell which is created for every new render.
    }

    const handleIncNewCount = () => {
        setnewcount((prev) => prev + 10);
        setnewcount((prev) => prev + 10);
    }

    return <>

        <div>
            <h2>Counter : <span>{count}</span></h2>
            <button onClick={handleIncCount}>Increment by 10</button>
        </div>

        <div>
            <h2>New Counter : <span>{newcount}</span></h2>
            <button onClick={handleIncNewCount}>Increment by 10</button>
        </div>



    </>

}


export default Counter