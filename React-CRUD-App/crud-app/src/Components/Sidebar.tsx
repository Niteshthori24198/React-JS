import React, { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

import styled from 'styled-components'



function Sidebar() {


    const [searchParams, setsearchParams] = useSearchParams()


    const [restaurantType, setrestaurantType] = React.useState<string[]>(searchParams.getAll('type') || [])

    const [restRating, setrestRating] = React.useState<number[]>(searchParams.getAll('rating').map(Number) || [])


    const [order, setorder] = React.useState<string | null>(searchParams.get('order') || null)




    const handleRatingchange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;

        let newratingelected: number[] = [...restRating]

        if (newratingelected.includes(+value)) {
            newratingelected = newratingelected.filter((ele) => ele !== +value)
        } else {
            newratingelected.push(+value)
        }

        setrestRating(newratingelected)

        console.log((newratingelected));


    }

    const handleTypechange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;

        let newtypeselected: string[] = [...restaurantType]

        if (newtypeselected.includes(value)) {
            newtypeselected = newtypeselected.filter((ele) => ele !== value)
        } else {
            newtypeselected.push(value)
        }

        setrestaurantType(newtypeselected)

        console.log((newtypeselected));


    }


    const handleSorting = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;
        setorder(value)

    }


    useEffect(() => {

        const params = new URLSearchParams();

        restaurantType.forEach(type => {
            params.append('type', type);
        });


        restRating.forEach(rating => {
            params.append('rating', rating.toString());
        });

        if(order){

            params.append('order', order)
        }

        setsearchParams(params);


    }, [restaurantType, restRating, order])


    return (

        <SideWrapper>

            <h2>Filter By Restaurant Type</h2>

            <div>

                <input type="checkbox" value={"ethnic"} onChange={handleTypechange} checked={restaurantType.includes("ethnic")} />
                <label>ethnic</label>

            </div>

            <div>

                <input type="checkbox" value={"fast_food"} onChange={handleTypechange} checked={restaurantType.includes("fast_food")} />
                <label>fast_food</label>

            </div>

            <div>

                <input type="checkbox" value={"cafe"} onChange={handleTypechange} checked={restaurantType.includes("cafe")} />
                <label>cafe</label>

            </div>

            <div>

                <input type="checkbox" value={"casual_dining"} onChange={handleTypechange} checked={restaurantType.includes("casual_dining")} />
                <label>casual_dining</label>

            </div>




            <h2>Filter by Rating</h2>

            <div>

                <input type="checkbox" value={"5"} onChange={handleRatingchange} checked={restRating.includes(5)} />
                <label>5⭐ Rating Top One</label>

            </div>

            <div>

                <input type="checkbox" value={"4"} onChange={handleRatingchange} checked={restRating.includes(4)} />
                <label>4⭐ Rating & Above</label>

            </div>

            <div>

                <input type="checkbox" value={"3"} onChange={handleRatingchange} checked={restRating.includes(3)} />
                <label>3⭐ Rating & Above</label>

            </div>

            <div>

                <input type="checkbox" value={"2"} onChange={handleRatingchange} checked={restRating.includes(2)} />
                <label>2⭐ Rating & Above</label>

            </div>


            <h2>Sort by Price</h2>

            <div >

                <input type="radio" name="order" value={"asc"} onChange={handleSorting} defaultChecked={order==="asc"} />
                <label >Low to High</label>
                <input type="radio" name="order" value={"desc"} onChange={handleSorting} defaultChecked={order==="desc"}/>
                <label >High to Low</label>

            </div>


        </SideWrapper>




    )
}

export default Sidebar


const SideWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: auto;
    min-height: 80vh;
    border-right: 2px solid black;
    padding-right: 18px;

    div{
        margin: 5px;
    }

    div:nth-child(12){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 5px;
    }

    div:nth-child(12)>input, div:nth-child(12)>label{
       
        margin-left: -30px;
    }

`
