import React from 'react'

function MyReducer(reducer, initialState) {

    const [formstate, setFormState] = React.useState(initialState)

    const dispatch = (action) => {

        const newState = reducer(formstate, action);

        setFormState(newState);

    }

    return [formstate, dispatch]
}

export default MyReducer
