import { toggleTodo } from "../api"
import { NewTodoTypes } from "../interface"



function TodoItem({ id, status, title, handleUpdate }: NewTodoTypes) {

    const handletoggle = () => {
        toggleTodo(id, status).then((res) => {
            handleUpdate()
        })
    }

    return (
        <div key={id}>
            <p>title : {title}</p>
            <p>status : {status ? "Yes" : "No"}</p>
            <button onClick={handletoggle}>Toggle</button>
        </div>

    )
}

export default TodoItem


