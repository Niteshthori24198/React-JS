import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import { getTodo } from "../api"
import { NewTodo } from "../interface"
import TodoItem from "./TodoItem"


function TodoApp() {

    const [todos, settodos] = useState<NewTodo[]>([])

    const [isupdate, setisupdate] = useState<boolean>(false)

    const handleUpdate = (): void => {
        setisupdate(!isupdate)
    }


    useEffect(() => {
        getTodo().then((res) => {

            settodos(res);
        })
    }, [isupdate])

    return (
        <>
            <TodoInput />

            <div>
                {
                    todos.map((ele) => {
                        return <TodoItem key={ele.id} {...ele} handleUpdate={handleUpdate} />

                    })
                }

            </div>
        </>
    )
}

export default TodoApp
