import {ADD} from "../../ActionTypes/actiontypes"

export const addcounterAction = (payload) => {
    return {
        type: ADD,
        payload: payload
    }
}
