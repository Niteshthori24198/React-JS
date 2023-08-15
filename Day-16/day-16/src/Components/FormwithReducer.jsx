import { useReducer } from "react";
import useMyReducer from "../Hooks/useMyReducer";


const initialstate = {
    Email: '',
    Name: ''
}


const reducer = (state, action) => {

    switch (action.type) {

        case 'Name': {
            return {
                ...state, Name: action.payload
            }
        }
        case 'Email': {
            return {
                ...state, Email: action.payload
            }
        }
        case 'reset': {
            return {
                ...initialstate
            }
        }

        default:
            throw new Error('Error hai bsdk')
    }
}



export default function FormwithReducer() {

    const [state, dispatcherFunc] = useMyReducer(reducer, initialstate)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        dispatcherFunc({ type: 'reset' })
    }


    return (

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Email" value={state.Email} onChange={(e) => dispatcherFunc({ type: 'Email', payload: e.target.value })} />

            <input type="text" placeholder="Name" value={state.Name} onChange={(e) => dispatcherFunc({ type: 'Name', payload: e.target.value })} />

            <input type="submit" value={"Submit"} />

        </form>



    )

}