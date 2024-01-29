import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}


function handleAdd(state, action) {

    const todo = {
        id: nanoid(),
        title: action.payload.title,
    }

    state.todos.push(todo);
}

function handleDelete(state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
}

function handleUpdate(state, action) {

    state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
            return action.payload
        }
        return todo
    })
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => handleAdd(state, action),
        removeTodo: (state, action) => handleDelete(state, action),
        updateTodo: (state, action) => handleUpdate(state, action)
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer