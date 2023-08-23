import { GET_RESTAURANT, POST_RESTAURANT, RESTAURANT_FAILURE, RESTAURANT_REQ } from "../actionTypes"

export interface restaurantsStructure {
    name: string,
    type: string,
    rating: number,
    price: number,
    image: string
}


export interface restaurantTypes {
    isloading: boolean,
    iserror: boolean,
    restaurants: Array<restaurantsStructure>
}



export interface restaurantActionTypes {
    type: string,
    payload?: restaurantsStructure

}


export const initialState: restaurantTypes = {
    isloading: false,
    iserror: false,
    restaurants: []
}



export const reducer = (state: restaurantTypes = initialState, { type, payload }: restaurantActionTypes) => {
    switch (type) {

        case RESTAURANT_REQ: {
            return {
                isloading: true,
                iserror: false,
                restaurants: []
            }
        }

        case GET_RESTAURANT: {
            return {
                isloading: false,
                iserror: false,
                restaurants:payload
            }
        }

        case POST_RESTAURANT: {
            return {
                isloading: false,
                iserror: false,
                restaurants: [...state.restaurants, payload]
            }
        }

        case RESTAURANT_FAILURE: {
            return {
                isloading: false,
                iserror: true,
                restaurants: []
            }
        }

        default:
            return state
    }
}