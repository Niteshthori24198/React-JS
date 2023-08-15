import { useEffect } from "react";
import { useState } from "react";

export default function useTimer(delay) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        
        setTimeout(() => {

            setShow(!show)

        }, delay)

    }, [])


    return show

}