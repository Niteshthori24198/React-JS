import React, { useEffect } from 'react'

import axios from 'axios'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchTodoSuccessAction, todoRequestAction, fetchtodoErrorAction } from '../Redux/action'


function TodoItems() {

    const state = useSelector((state) =>{
        return {
            todos:state.todos,
            isloading:state.isloading,
            iserror:state.iserror,
            errormessage:state.errormessage
        }
    },shallowEqual )

    const { todos, isloading, iserror, errormessage } = state;

    const dispatch = useDispatch()

    const getTodo = () => {

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

    console.log('Todo- Re render')

    useEffect(() => {
        getTodo()
    }, [])


    return (

        <div>


            {
                isloading ? <h2>Loading .........</h2> : iserror ?
                    <h2>{errormessage}</h2> :
                    todos.map((item) => {
                        return <div key={item.id}>

                            <p>Title : {item.title}</p>
                            <p>Status : {item.status ? "Done" : "Pending"}</p>

                        </div>

                    })

            }

        </div>

    )
}

export default TodoItems
