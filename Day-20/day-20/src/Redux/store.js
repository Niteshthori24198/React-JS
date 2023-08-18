import { legacy_createStore, combineReducers } from "redux";

import { reducer as Todoreducer } from "./Todos/reducer";

import { reducer as Counterreducer } from "./Counter/reducer"


const rootreducer = combineReducers({ Counterreducer, Todoreducer })

export const store = legacy_createStore(rootreducer)