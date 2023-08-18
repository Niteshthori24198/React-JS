import { GET_TODO, POST_TODO, TODO_ERR, TODO_REQ } from "../../ActionTypes/actiontypes"



export const fetchTodoSuccessAction = (payload) => {

    return {
        type: GET_TODO,
        payload: payload
    }

}


export const posttodosAction = (payload) => {

    return {
        type: POST_TODO,
        payload: payload
    }

}


export const todoRequestAction = () => {
    return {
        type: TODO_REQ
    }
}


export const fetchtodoErrorAction = (payload) => {
    return {
        type: TODO_ERR,
        payload: payload
    }
}