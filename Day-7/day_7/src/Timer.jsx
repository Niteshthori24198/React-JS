import React from "react";

export default function Timer() {

    const [count, setcount] = React.useState(10);


    React.useEffect(() => {

        const id = setInterval(() => {

            setcount((prevcount) => {

                if (prevcount === 1) {
                    clearInterval(id)
                    return 0;
                }
                return prevcount - 1
            })

            console.log('intervel chala')
            
        }, 1000);


        const cleanup = () => {

            console.log('clean up called')

            clearInterval(id);

        }

        return cleanup


    }, [])

    return <h2>Count : {count}</h2>

   


}