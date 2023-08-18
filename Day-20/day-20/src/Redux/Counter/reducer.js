import { loadData, saveData } from "../../utils/handleStorage"

import { ADD } from './actiontypes'


const initialState = {
    counter: loadData('count') || 0
}


export const reducer = (state=initialState, { type, payload }) => {
    switch (type) {

        case ADD: {

            let newcount = state.counter + payload;

            saveData('count', newcount)

            return {
                ...state,
                counter: newcount
            }
        }

        default:
            return state
    }
}