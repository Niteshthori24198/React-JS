import React from 'react'

import { getAllRestaurant } from '../Redux/Restaurant/action'

import { AppState, useAppDispatch, useAppSelector } from '../Redux/store'

import RestaurantItem from './RestaurantItem'

import styled from 'styled-components'

import { restaurantsStructure } from '../Redux/Restaurant/reducer'


function RestaurantList() {

    const restaurant:restaurantsStructure[] = useAppSelector((state: AppState) => state.restaurantReducer['restaurants']);


    const dispatch = useAppDispatch()


    React.useEffect(() => {

        dispatch(getAllRestaurant)

    }, [])

    return (

        <RestContWrapper>

            {

                restaurant.map((ele:restaurantsStructure,i:number) => {

                    return <RestaurantItem key={i} {...ele} />

                })

            }


        </RestContWrapper>
    )
}

export default RestaurantList


const RestContWrapper = styled.div`
    
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2,1fr);
    margin: auto;

`