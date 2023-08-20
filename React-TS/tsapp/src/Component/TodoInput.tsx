
import { useState } from "react"
import { addTodo } from "../api"

function TodoInput() {

    const [title, settitle] = useState<string>('')

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {

        settitle(e.target.value)

    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const newtodo = {

            title: title,
            status: false
        }

        addTodo(newtodo)

        settitle('')



    }



    return (
        <>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={handlechange} />
                    <button>Add</button>
                </form>
            </div>

        </>
    )
}

export default TodoInput
