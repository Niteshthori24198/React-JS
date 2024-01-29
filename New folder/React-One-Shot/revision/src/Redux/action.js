import { ADD_TODO, DELETE_TODO, GET_TODO, TODO_REQUEST, TODO_REQ_ERROR, UPDATE_TODO } from "./actionTypes"

import axios from 'axios'

const todoRequestAction = () => {
    return {
        type: TODO_REQUEST
    }
}



const todoErrorAction = (payload) => {
    return {
        type: TODO_REQ_ERROR,
        payload
    }
}



const getTodoReqAction = (payload) => {
    return {
        type: GET_TODO,
        payload
    }
}



const postTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}



const updateTodoAction = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}



const deleteTodoAction = () => {
    return {
        type: DELETE_TODO
    }
}




export const getTodos = (payload) => (dispatch) => {

    dispatch(todoRequestAction())

    axios({
        method: 'GET',
        url: `${process.env.REACT_APP_BASEURL}`,
        params:payload
    }).then((res) => {
        dispatch(getTodoReqAction(res.data))
    }).catch((error) => {
        dispatch(todoErrorAction(error.message))
    })

}




export const addTodos = (payload) => (dispatch) => {

    dispatch(todoRequestAction())

    axios({
        method: 'POST',
        url: `${process.env.REACT_APP_BASEURL}`,
        data: payload
    }).then((res) => {
        dispatch(postTodoAction(res.data))
        alert('Added')
    }).catch((error) => {
        dispatch(todoErrorAction(error.message))
    })

}





export const updateTodos = (payload) => (dispatch) => {


    dispatch(todoRequestAction())

    axios({
        method: 'PATCH',
        url: `${process.env.REACT_APP_BASEURL}/${payload.id}`,
        data: payload
    }).then((res) => {
        dispatch(updateTodoAction(payload))
        alert('Updated')
    }).catch((error) => {
        dispatch(todoErrorAction(error.message))
    })
}





export const deleteTodos = (id) => (dispatch) => {

    dispatch(todoRequestAction())

    axios({
        method: 'DELETE',
        url: `${process.env.REACT_APP_BASEURL}/${id}`
    }).then((res) => {
        dispatch(deleteTodoAction({payload:id}))
        alert('Deleted')
    }).catch((error) => {
        dispatch(todoErrorAction(error.message))
    })
}