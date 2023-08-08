import React from "react";

export default function Counter() {

    const ref = React.useRef(null);

    const [count, setcount] = React.useState(3610)


    const handlestop = () => {
        clearInterval(ref.current);
        ref.current = null;
    }

    const handlereset = () => {
        ref.current = null;
        setcount(3610)
    }

    const formathour = (t)=>{
        if(t<=9){
            return `0${t}`
        }
        return t
    }

    const formartime = (time)=>{

        let sec=time%60;
        let min=Math.floor(time/60)
        let hr=Math.floor(time/3600)

        return `${formathour(hr)}:${formathour(min)}:${formathour(sec)}`

    }


    const handlestart = () => {


        if(ref.current){
            return
        }

        ref.current = setInterval(() => {

            setcount((prev) => {

                if (prev <= 1) {
                    clearTimeout(ref.current)
                    return 0;
                }
                prev = prev - 1;

                return prev
            })

            console.log('Intervel')

        }, 1000);


    }


    React.useEffect(() => {

        const cleanup = () => {

            console.log('clean up');
            handlestop()

        }

        return cleanup

    }, [])



    return (

        <div>

            <h2>count : {formartime(count)}</h2>

            <button onClick={handlestart}>Start</button>
            <button onClick={handlestop}>Stop</button>
            <button onClick={handlereset}>Reset</button>

        </div>
    )

}