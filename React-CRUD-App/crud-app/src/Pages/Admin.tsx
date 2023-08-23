import React, { useState } from 'react'
import { restaurantsStructure } from '../Redux/Restaurant/reducer'
import styled from 'styled-components';
import { useAppDispatch } from '../Redux/store';
import { addNewRestaurant } from '../Redux/Restaurant/action';


function Admin() {


    const dispatch = useAppDispatch()

    const [restaurantformdata, setrestaurantformdata] = useState<restaurantsStructure>({
        name: '',
        type: '',
        rating: 0,
        price: 0,
        image: ''
    })


    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setrestaurantformdata({
            ...restaurantformdata,
            [name]: value
        })

    }

    const handletypechange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const { name, value } = e.target;

        setrestaurantformdata({
            ...restaurantformdata,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        dispatch(addNewRestaurant(restaurantformdata))

    }


    return (


        <Wrapper onSubmit={handleSubmit}>

            <input type="text" placeholder='Enter Restaurant Name' name='name' value={restaurantformdata.name} onChange={(e) => handlechange(e)} required />

            <select name="type" required value={restaurantformdata.type} onChange={(e) => handletypechange(e)} >

                <option value="">Select Type</option>
                <option value="casual_dining">casual_dining</option>
                <option value="cafe">cafe</option>
                <option value="fast_food">fast_food</option>
                <option value="ethnic">ethnic</option>

            </select>


            <input type="number" placeholder='Enter Rating' name='rating' value={restaurantformdata.rating} onChange={(e) => handlechange(e)} required />

            <input type="number" placeholder='Enter Price' name='price' value={restaurantformdata.price} onChange={(e) => handlechange(e)} required />

            <input type="text" placeholder='Enter Restaurant Image' name='image' value={restaurantformdata.image} onChange={(e) => handlechange(e)} required />

            <input type="submit" value="Add New Restaurant" />

        </Wrapper>
    )
}

export default Admin



const Wrapper = styled.form`
    
    width: 35%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 100px auto;
    padding: 20px;

    input,select{
        width: 80%;
        text-align: center;
        height: 30px;
        border-radius: 7px;
        outline: none;
        margin: auto;
    }

    input:nth-child(6){
        background-color: #007bff;
        color: white;
        letter-spacing: 2px;
        cursor: pointer;
        font-size: 16px;
    }

`