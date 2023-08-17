
import { ADD } from "./actiontype"

export const reducer = (state, {type,payload})=>{

    switch(type){
        
        case ADD:{
            return {
                ...state,
                counter:state.counter+payload
            }
        }

        default:
            return state
    }

}