import React, { useCallback, useState } from 'react'
import { Todo } from './Todo'

let Todos = [

    {
        id: Math.random() * 100,
        title: 'HTML',
        status: false
    },
    {
        id: Math.random() * 100,
        title: 'css',
        status: false
    },
    {
        id: Math.random() * 100,
        title: 'js',
        status: false
    }
]


function AddTodo() {

    const [title, settitle] = useState('')

    const [todos, settodos] = useState(Todos)

    const handleAdd = () => {

        const newtodo = {
            id: Math.random() * 100,
            title: title,
            status: false
        }


        settodos([...todos, newtodo])

    }

    const handletoggle = useCallback((id) => {

        Todos = Todos.map((ele) => {
            return ele.id === id ? {
                ...ele,
                status: !ele.status
            } : ele
        })

        settodos([...Todos])

    }, [])

    return (

        <>
            <div>
                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>

            <div>

                {
                    todos.map((ele) => {

                        return <Todo title={ele.title} id={ele.id} status={ele.status} handletoggle={handletoggle} />

                    })
                }

            </div>

        </>
    )
}

export default AddTodo
