
interface restaurants {
    name: string,
    type: string,
    rating: number,
    price: number,
    image: string
}


interface restaurantTypes {
    isloading: boolean,
    iserror: boolean,
    restaurants: Array<restaurants>
}



interface restaurantActionTypes {
    type: string,
    payload: restaurants

}


const initialState: restaurantTypes = {
    isloading: false,
    iserror: false,
    restaurants: []
}



export const reducer = (state: restaurantTypes = initialState, { type, payload }: restaurantActionTypes) => {
    switch (type) {
        default:
            return state
    }
}