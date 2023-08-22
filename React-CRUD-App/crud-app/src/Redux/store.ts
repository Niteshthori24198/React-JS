import { AnyAction } from 'redux';

import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'

import { useDispatch,useSelector ,TypedUseSelectorHook } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
 

import thunk from 'redux-thunk'

import { reducer as authReducer } from "./AuthComponent/reducer"

import { reducer as restaurantReducer } from "./Restaurant/reducer"

export const rootreducer = combineReducers({
    authReducer,
    restaurantReducer
})


export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppState = ReturnType<typeof rootreducer>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
 
export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;





