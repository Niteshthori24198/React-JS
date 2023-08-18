import {ADD} from './actiontypes'

export const addcounterAction = (payload) => {
    return {
        type: ADD,
        payload: payload
    }
}
