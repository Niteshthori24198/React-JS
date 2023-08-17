import { useState } from "react"
import { useDispatch } from "react-redux"

export default function AddTodo() {

    const [title, settitle] = useState('')

    const dispatch = useDispatch()

    const handleAdd = () => {

        const payload = {

            id: Math.floor(Math.random() * 100),
            title: title,
            status: false
        }

        dispatch({ type: 'Add', payload: payload })

        // now dispatch task using useDispatch hook here

    }

    return <div>

        <input type="text" placeholder="Enter task Name" value={title} onChange={(e) => settitle(e.target.value)} />

        <button onClick={handleAdd}>Add</button>

    </div>

}