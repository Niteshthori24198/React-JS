import { loadData, saveData } from "../../utils/handleStorage"
import { GET_TODO, POST_TODO, TODO_ERR, TODO_REQ } from "../ActionTypes/actiontypes"



const initialState = {
    todos: loadData('todos') || [],
    isloading: false,
    iserror: false,
    errormessage: '',
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case TODO_REQ: {
            return {
                ...state,
                isloading: true,
                iserror: false,
                errormessage: '',
            }
        }
        case TODO_ERR: {
            return {
                ...state,
                isloading: false,
                iserror: true,
                errormessage: payload,
                todos: []
            }
        }
        case GET_TODO: {

            saveData('todos', payload)

            return {
                ...state,
                isloading: false,
                iserror: false,
                errormessage: '',
                todos: payload
            }
        }
        case POST_TODO: {

            let data = [...state.todos, payload]

            saveData('todos', data)

            return {
                ...state,
                isloading: false,
                iserror: false,
                errormessage: '',
                todos: data
            }
        }

        default:
            return state
    }
}