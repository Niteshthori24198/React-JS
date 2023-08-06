
import React from "react"

function Button() {


    const [count, setcount] = React.useState(0);

    const handleclick = () => {
        setcount(count + 1);
    }

    return <>

        <button onClick={handleclick}>button clicked : {count} times.</button>

    </>

}


export default Button