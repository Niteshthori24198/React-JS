import React from 'react'

function Timer() {

    const ref = React.useRef(null);

    const [count, setcount] = React.useState(10);


    const handleStart = () => {

        if (ref.current) {
            return
        }

        ref.current = setInterval(() => {

            setcount((prev) => {

                if (prev <= 1) {
                    clearInterval(ref.current);
                    return 0;
                }

                prev = prev - 1;
                return prev;

            })

        }, 1000)

    }


    const handlestop = () => {
        clearInterval(ref.current);
        ref.current = null;
    }


    const handlereset = () => {
        clearInterval(ref.current);
        ref.current = null;
        setcount(10);
    }

    React.useEffect(() => {
        return () => {
            handlestop()
        }
    }, [])


    return (
        <>
            <h2>Timer : - {count}</h2>

            <button onClick={handlestop}>Stop</button>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlereset}>Reset</button>

        </>
    )
}

export default Timer
