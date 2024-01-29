import React from "react";

import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from "./app/todoSlice";

// eslint-disable-next-line react/prop-types
export default function Addtodo({ data, setIsUpdated }) {

    console.log("received data", data)

    const Dispatch = useDispatch();

    const [todos, setTodos] = React.useState({
        // eslint-disable-next-line react/prop-types
        title: data ? data.title : '', // Set initial title if data is provided
    });

    const handlechange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setTodos({
            ...todos,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data) {
            // If data is present, dispatch an action to update the todo
            // and reset the editedTodoData state in the Display component
            // eslint-disable-next-line react/prop-types
            Dispatch(updateTodo({ id: data.id, title: todos.title }));
            setIsUpdated(false);
        } else {
            // If no data, dispatch an action to add a new todo
            Dispatch(addTodo(todos));
        }
        setIsUpdated(false);
    };

    React.useEffect(() => {

    }, [todos])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    // eslint-disable-next-line react/prop-types
                    value={todos.title}
                    onChange={handlechange}
                    required
                />
                <input type="submit" value={data ? 'Update' : 'Add'} />
            </form>
        </>
    )
}