import { useState } from "react";

export default function useCounter() {

    const [count, setCount] = useState(0)

    const func = (val) => {
        setCount((prev) => prev + val)
    }

    return [count, func]

}