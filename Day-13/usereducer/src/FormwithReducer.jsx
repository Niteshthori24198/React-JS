
import { useReducer } from 'react'

const initialState = {
    username: '',
    age: 18
}


const reducer = (actionstate, actionobj) => {

    switch (actionobj.type) {

        case 'updatename': {
            return {
                ...actionstate,
                username: actionobj.payload
            }
        }

        case 'incage': {
            return {
                ...actionstate,
                age: actionstate.age + actionobj.value
            }
        }
        case 'decage': {
            return {
                ...actionstate,
                age: actionstate.age + actionobj.value
            }
        }
        case 'reset': {
            return {
                ...initialState
            }
        }
        default:
            throw new Error('Invalid Action')
    }
}


export default function FormwithReducer() {


    const [state, dispatch] = useReducer(reducer, initialState)

    const handleregister = () => {
        let data = state;

        console.log("data", data)

        dispatch({ type: 'reset' })
    }

    console.log(state)

    return <div>

        <input type="text" placeholder='enter Name' value={state.username} onChange={(e) => dispatch({ type: 'updatename', payload: e.target.value })} />

        <button onClick={() => dispatch({ type: 'incage', value: 1 })}>Inc Age</button>
        <span>{state.age}</span>
        <button onClick={() => dispatch({ type: 'decage', value: -1 })}>Dec age</button>

        <button onClick={handleregister}>Register</button>

    </div>

}