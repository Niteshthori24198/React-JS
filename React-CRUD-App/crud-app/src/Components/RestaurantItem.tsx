
import styled from 'styled-components'
import { restaurantsStructure } from '../Redux/Restaurant/reducer'



function RestaurantItem({ name, type, rating, image, price }: restaurantsStructure) {


    return (
        <Restwrapper>
            <img src={image} alt="Restaurant" />
            <p>Name :{name}</p>
            <p>Type : {type}</p>
            <p>Rating : {rating} ⭐</p>
            <p>price : {price} Rs</p>
        </Restwrapper>

    )
}

export default RestaurantItem



const Restwrapper = styled.div`
    border: 1px solid gray;
    padding: 12px;
`