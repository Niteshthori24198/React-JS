import axios from 'axios'
import React, { useState } from 'react'

import { useDispatch} from 'react-redux'

import { fetchtodoErrorAction, posttodosAction, todoRequestAction } from '../Redux/action'

function AddTodo() {


    const [title, settitle] = useState('')

    const dispatch = useDispatch()



    const handleAddTodo = () => {

        const payload = {
            title: title,
            status: false
        }

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


    return (
        <div>
            <input type="text" placeholder='Create TODO' value={title} onChange={(e) => settitle(e.target.value)} />

            <button onClick={handleAddTodo}>ADD TODO</button>

        </div>

    )
}

export default AddTodo
