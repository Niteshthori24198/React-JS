import { Login_Done, Login_Fail, Login_REQ } from "../ActionTypes/actiontypes"

export const LoginRequestAction = ()=>{
    return {
        type:Login_REQ
    }
}


export const LoginRequestSuccessAction = (payload)=>{
    return {
        type:Login_Done,
        payload:payload
    }
}



export const LoginRequestFailAction = ()=>{
    return {
        type:Login_Fail
    }
}