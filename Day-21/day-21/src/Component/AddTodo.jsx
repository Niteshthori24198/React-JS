
import React, { useState } from 'react'

import { useDispatch} from 'react-redux'

import {  postTodo } from '../Redux/Todos/action'

function AddTodo() {


    const [title, settitle] = useState('')

    const dispatch = useDispatch()



    const handleAddTodo = () => {

        const payload = {
            title: title,
            status: false
        }

        postTodo(payload,dispatch)

    }


    return (
        <div>
            <input type="text" placeholder='Create TODO' value={title} onChange={(e) => settitle(e.target.value)} />

            <button onClick={handleAddTodo}>ADD TODO</button>

        </div>

    )
}

export default AddTodo
