import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "../actionTypes"

export interface Authinterface {
    isAuth: boolean,
    isloading: boolean,
    iserror: boolean,
    token: string | undefined
}


const initialState: Authinterface = {
    isAuth: false,
    isloading: false,
    iserror: false,
    token: ''
}


export interface AuthActionType {

    type: string,
    payload?: string 

}



export const reducer = (state: Authinterface = initialState, { type, payload }: AuthActionType): Authinterface => {
    switch (type) {

        case LOGIN_REQ: {
            return {
                isloading: true,
                iserror: false,
                token: '',
                isAuth: false
            }
        }

        case LOGIN_SUCCESS: {
            return {
                isloading: false,
                iserror: false,
                token: payload,
                isAuth: true
            }
        }

        case LOGIN_FAIL: {
            return {
                isloading: false,
                iserror: true,
                token: '',
                isAuth: false
            }
        }

        default:
            return state
    }
}
