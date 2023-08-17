
// Global State to handle common data to be serve

const initialstate = {
    todos: []
}


export const reducer = (state = initialstate, { type, payload }) => {


    switch (type) {
        case 'Add': {
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        }
        default:
            return state
    }

}