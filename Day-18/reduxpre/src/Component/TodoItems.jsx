import React from 'react'
import { useSelector } from 'react-redux'

function TodoItems() {

    // to retreive data from store we need another hook from redux : useSelector

    const todos = useSelector(state => state.todos)


    return (

        <div>
            <h2>Task Lists : </h2>

            {

                todos.map((item) => {
                    return <div key={item.id}>
                        <p>TaskName : {item.title}</p>
                        <p>Status : {item.status ? "Completed" : "Pending"}</p>
                    </div>
                })

            }

        </div>

    )
}

export default TodoItems
