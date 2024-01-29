import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "./app/todoSlice";
import React from "react";
import Addtodo from "./Addtodo";


function Todo() {

    const [isUpdated, setIsUpdated] = React.useState(false);

    return (
        <>
            <Display isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
        </>
    )
}


// eslint-disable-next-line react/prop-types
function Display({ isUpdated, setIsUpdated }) {

    const [editedTodoData, setEditedTodoData] = React.useState(null);

    const Dispatch = useDispatch();

    const todoItems = useSelector(state => state.todoReducer.todos);

    const handleEdit = (id) => {

        let data = todoItems.find(item => item.id === id);
        console.log("data", data)
        setEditedTodoData(data);
        setIsUpdated(true);
    }


    return <>

        <Addtodo data={editedTodoData} setIsUpdated={setIsUpdated} />

        {
            todoItems.map((item) => {
                return <div key={item.id}>
                    <li>{item.title}</li>
                    <button onClick={() => {
                        Dispatch(removeTodo(item.id));
                        setIsUpdated(!isUpdated);
                    }}>Delete</button>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                </div >
            })
        }
    </>
}

export default Todo
