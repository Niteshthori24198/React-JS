import React from 'react'

import { getAllRestaurant } from '../Redux/Restaurant/action'

import { AppState, useAppDispatch, useAppSelector } from '../Redux/store'

import RestaurantItem from './RestaurantItem'

import styled from 'styled-components'

import { restaurantsStructure } from '../Redux/Restaurant/reducer'
import { useSearchParams } from 'react-router-dom'


export interface ParamsTypes{
    type?:string[],
    rating?:number[],
    _order?:string,
    _sort?:string
}


function RestaurantList() {

    const [searchParams] = useSearchParams()


    const restaurant: restaurantsStructure[] = useAppSelector((state: AppState) => state.restaurantReducer['restaurants']);

    let order=''

    if(searchParams.get('order')!==undefined){
        order=searchParams.get('order')|| '';
    }

    const dispatch = useAppDispatch()

    const params:ParamsTypes = {
        type:searchParams.getAll('type'),
        rating:searchParams.getAll('rating').map(Number),
        _order:order,
        _sort:"price"


    }


    React.useEffect(() => {

        dispatch(getAllRestaurant(params))

    }, [searchParams])

    return (

        <RestContWrapper>

            {

                restaurant.map((ele: restaurantsStructure, i: number) => {

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