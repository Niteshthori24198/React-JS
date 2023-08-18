import { Login_Done, Login_Fail, Login_REQ } from "../../ActionTypes/actiontypes"

const initialState = {
    auth:false,
    isloading: false,
    iserror: false,
    token: ''
}


export const reducer = (state = initialState, { type, payload }) => {


    switch (type) {


        case Login_REQ: {
            return {
                ...state,
                isloading: true,
                iserror: false,
                auth:false
            }
        }
        case Login_Done: {
            return {
                ...state,
                isloading: false,
                iserror: false,
                token: payload,
                auth:true
            }
        }
        case Login_Fail: {
            return {
                ...state,
                isloading: false,
                iserror: true,
                token: '',
                auth:false
            }
        }

        default: {
            return state
        }
    }
}