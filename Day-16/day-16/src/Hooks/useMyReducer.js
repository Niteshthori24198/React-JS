import { useState } from "react";

export default function useMyReducer(reducer, initialstate) {

    const [state, setState] = useState(initialstate)

    const dispatcherFunc = (action) => {

        const newState = reducer(state,action)

        setState(newState)
    }

    return [state, dispatcherFunc]


}