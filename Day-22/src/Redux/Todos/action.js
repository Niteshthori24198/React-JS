import axios from "axios"

import { GET_TODO, POST_TODO, TODO_ERR, TODO_REQ } from "../ActionTypes/actiontypes"


const fetchTodoSuccessAction = (payload) => {

    return {
        type: GET_TODO,
        payload: payload
    }

}


const posttodosAction = (payload) => {

    return {
        type: POST_TODO,
        payload: payload
    }

}


const todoRequestAction = () => {
    return {
        type: TODO_REQ
    }
}


const fetchtodoErrorAction = (payload) => {
    return {
        type: TODO_ERR,
        payload: payload
    }
}





export const getTodo = (dispatch) => {

    dispatch(todoRequestAction())

    axios({
        method: 'get',
        url: `http://localhost:3001/todos`
    })
        .then((res) => {
            dispatch(fetchTodoSuccessAction(res.data))
        })
        .catch((error) => {
            fetchtodoErrorAction(error.message)
        })
}





export const postTodo = (payload) => (dispatch) => {
    dispatch(todoRequestAction())

    axios({
        method: 'post',
        url: 'http://localhost:3001/todos',
        data: payload
    })
        .then((res) => {
            dispatch(posttodosAction(res.data))

        })
        .catch((error) => {
            dispatch(fetchtodoErrorAction(error.message))
        })
}