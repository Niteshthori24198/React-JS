import React, { useEffect } from 'react'


import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTodo } from '../Redux/Todos/action'


function TodoItems() {

    const state = useSelector((state) => {
        return {
            todos: state.Todoreducer.todos,
            isloading: state.Todoreducer.isloading,
            iserror: state.Todoreducer.iserror,
            errormessage: state.Todoreducer.errormessage
        }
    }, shallowEqual)

    const { todos, isloading, iserror, errormessage } = state;

    const dispatch = useDispatch()



    console.log('Todo- Re render')

    useEffect(() => {
        dispatch(getTodo)
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
