import { legacy_createStore, combineReducers } from "redux";

import { reducer as Todoreducer } from "./Todos/reducer";

import { reducer as Counterreducer } from "./Counter/reducer"

import { reducer as Loginreducer } from "./Auth/reducer"


const rootreducer = combineReducers({ Counterreducer, Todoreducer, Loginreducer })

export const store = legacy_createStore(rootreducer)