import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import { reducer as Todoreducer } from "./Todos/reducer";

import { reducer as Counterreducer } from "./Counter/reducer"

import { reducer as Loginreducer } from "./Auth/reducer"

import thunk from 'redux-thunk'


const rootreducer = combineReducers({ Counterreducer, Todoreducer, Loginreducer })



// const myMiddleware = (store) => (dispatch) => (action) => {
//     // dispatch ---> dispatch function
//     // action  ---->   getTodo

//     // dispatch(action) [this we have] ---> action(dispatch) [redux need this]

//     if (typeof action === 'function') {
//         return action(dispatch)
//     }

//     return dispatch(action)

// }



export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))