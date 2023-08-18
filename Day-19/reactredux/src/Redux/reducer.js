import { ADD, GET_TODO, POST_TODO, TODO_ERR, TODO_REQ } from "./actiontypes"

export const reducer = (state, { type, payload }) => {
    switch (type) {

        case ADD: {
            return {
                ...state,
                counter: state.counter + payload
            }
        }

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
            return {
                ...state,
                isloading: false,
                iserror: false,
                errormessage: '',
                todos: payload
            }
        }
        case POST_TODO: {
            return {
                ...state,
                isloading: false,
                iserror: false,
                errormessage: '',
                todos: [...state.todos, payload]
            }
        }

        default:
            return state
    }
}