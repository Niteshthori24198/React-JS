
import axios from "axios"

import { ThunkAction } from "redux-thunk"


import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS } from "../actionTypes"

import { userloginform } from '../../Pages/Login'

import { AuthActionType } from "./reducer"

import { RootState } from "../store"


export const loginUser = (payload: userloginform):ThunkAction<void, RootState, null, AuthActionType> => (dispatch) => {

    dispatch({ type: LOGIN_REQ })

    axios({
        url: `${process.env.REACT_APP_LOGIN_URL}`,
        method: 'post',
        data: payload
    }).then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        alert('login done')
    })
        .catch((err) => {
            dispatch({ type: LOGIN_FAIL })
        })

}