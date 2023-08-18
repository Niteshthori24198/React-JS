import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    todos: [],
    isloading: false,
    iserror: false,
    errormessage: '',
    counter: 0
}

export const store = legacy_createStore(reducer, initialState)