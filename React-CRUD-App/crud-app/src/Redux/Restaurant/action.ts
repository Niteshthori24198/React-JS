
import { ThunkAction } from "redux-thunk";

import { restaurantActionTypes, restaurantsStructure } from "./reducer";

import { AppDispatch, RootState } from "../store";

import axios from "axios";

import { GET_RESTAURANT, POST_RESTAURANT, RESTAURANT_FAILURE, RESTAURANT_REQ } from "../actionTypes";
import { ParamsTypes } from "../../Components/RestaurantList";





export const addNewRestaurant = (payload: restaurantsStructure): ThunkAction<void, RootState, null, restaurantActionTypes> => (dispatch) => {


    dispatch({ type: RESTAURANT_REQ })

    axios({
        url: `${process.env.REACT_APP_BASE_URL}`,
        method: 'post',
        data: payload
    }).then((res) => {
        dispatch({ type: POST_RESTAURANT, payload: res.data })
        alert('Restaurant Establishment done')
    })
        .catch((err) => {
            dispatch({ type: RESTAURANT_FAILURE })
        })

}


export const getAllRestaurant = (payload:ParamsTypes) => (dispatch: AppDispatch) => {

    dispatch({ type: RESTAURANT_REQ })

    axios({
        url: `${process.env.REACT_APP_BASE_URL}`,
        method: 'get',
        params:payload
    }).then((res) => {
        dispatch({ type: GET_RESTAURANT, payload: res.data })

    })
        .catch((err) => {
            dispatch({ type: RESTAURANT_FAILURE })
            console.log(err);

        })
}