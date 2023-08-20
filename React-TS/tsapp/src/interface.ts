export interface Todo {
    title: string,
    status: boolean
}


export interface NewTodo extends Todo {
    id: number
}

export interface NewTodoTypes extends NewTodo {
    handleUpdate: () => void
}