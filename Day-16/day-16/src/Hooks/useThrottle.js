
import { useRef } from "react";

export default function useThrottle(){

    let { current: wait } = useRef(false)

    const throttle = (func, delay) => {

        if (wait) {
            return
        }

        func()
        wait = true;

        setTimeout(() => {
            wait = false;
        }, delay)
    }


    return throttle
}