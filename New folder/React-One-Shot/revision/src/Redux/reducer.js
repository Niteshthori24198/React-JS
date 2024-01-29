import { ADD_TODO, DELETE_TODO, GET_TODO, TODO_REQUEST, TODO_REQ_ERROR, UPDATE_TODO } from "./actionTypes"


const savedata = (key, data) => {
    localStorage.setItem(key, data)
}


const getdata = (key) => {
    return +localStorage.getItem(key) || 0;
}



const initialState = {
    isloading: false,
    iserror: false,
    error: '',
    todos: [],
    totalTaskcount: getdata('total')
}


export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case TODO_REQUEST: {
            return {
                ...state,
                isloading: true,
                iserror: false,
                error: '',
                todos: []
            }
        }

        case TODO_REQ_ERROR: {
            return {
                ...state,
                isloading: false,
                iserror: true,
                error: payload,
                todos: []
            }
        }

        case GET_TODO: {
            return {
                ...state,
                isloading: false,
                iserror: false,
                error: '',
                todos: payload
            }
        }

        case ADD_TODO: {
            let count = +state.totalTaskcount + 1;
            savedata('total', count)
            return {
                ...state,
                isloading: false,
                iserror: false,
                error: '',
                todos: [...state.todos, payload],
                totalTaskcount: count

            }
        }

        case UPDATE_TODO: {
            return {
                ...state,
                isloading: false,
                iserror: false,
                error: '',
                todos: state.todos.map((item) => {
                    if (item.id !== payload.id) {
                        return item
                    } else {
                        return {
                            ...item,
                            ...payload
                        }
                    }
                })
            }
        }

        case DELETE_TODO: {
            let count = +state.totalTaskcount - 1;
            savedata('total', count)
            return {
                ...state,
                isloading: false,
                iserror: false,
                error: '',
                todos: state.todos.filter((item) => item.id !== payload.id),
                totalTaskcount: count
            }
        }

        default: {
            return state
        }
    }
}


