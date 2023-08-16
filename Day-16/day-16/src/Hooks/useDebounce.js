
import { useRef } from "react";


export default function useDebounce() {

    let { current: id } = useRef()

    const debounce = (makeReq, delay) => {

        if (id) {

            clearTimeout(id)

        }

        id = setTimeout(() => {
            makeReq()
        }, delay)
    }

    return debounce
}