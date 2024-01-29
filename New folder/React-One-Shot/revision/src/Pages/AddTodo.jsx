import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addTodos, updateTodos } from '../Redux/action'

import { useParams } from 'react-router-dom'

let initialstate = {
    title: '',
    author: '',
    status: false
}



const reducer = (state = initialstate, { type, payload }) => {

    switch (type) {

        case 'title': {
            return {
                ...state,
                title: payload
            }
        }

        case 'author': {
            return {
                ...state,
                author: payload
            }
        }

        case 'Edit': {
            return {
                ...state,
                ...payload
            }
        }

        case 'reset': {
            return {
                ...initialstate
            }
        }

        default:
            throw new Error('Error')
    }

}




function AddTodo() {

    const [state, dispatch] = React.useReducer(reducer, initialstate)

    const Dispatch = useDispatch()

    const todos = useSelector((state) => state.todoReducer.todos)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(todoId){
            Dispatch(updateTodos(state))
        }else{

            Dispatch(addTodos(state))
            dispatch({ type: 'reset' })
        }



    }



    const { id: todoId } = useParams()


    React.useEffect(() => {


        if (todoId) {

            const data = populateForm(todos, todoId);

            dispatch({ type: 'Edit', payload:data })
        } else {
            dispatch({ type: 'reset' })
        }


    }, [todoId])



    const { title, author } = state;


    return (

        <div>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Todo Task Name' value={title} onChange={(e) => dispatch({ type: 'title', payload: e.target.value })} />

                <input type="text" placeholder='Todo Task Author Name' value={author} onChange={(e) => dispatch({ type: 'author', payload: e.target.value })} />

                <button type="submit">{todoId ? "Update Todo" : "Add Todo"}</button>

            </form>


        </div>
    )
}

export default AddTodo


function populateForm(todos, id) {


    let data = todos.filter((ele) => ele.id === +id)
    return data[0]
}