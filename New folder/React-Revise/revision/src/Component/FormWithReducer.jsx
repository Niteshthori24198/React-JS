import React from 'react'
import MyReducer from '../Hooks/myReducer';


const initialState = {
    email: '',
    name: ''
}




const reducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'email': {
            return {
                ...state,
                email: payload
            }
        }
        case 'name': {
            return {
                ...state,
                name: payload
            }
        }
        case 'reset': {
            return {
                ...initialState
            }
        }
        default: {
            throw new Error('Error')
        }
    }

}



function FormWithReducer() {


    const [state, dispatch] = MyReducer(reducer, initialState);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        dispatch({ type: 'reset' })
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Email' value={state.email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} />
                <input type="text" placeholder='Name' value={state.name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} />
                <button type='submit'>Submit</button>

            </form>

        </>
    )
}

export default FormWithReducer
