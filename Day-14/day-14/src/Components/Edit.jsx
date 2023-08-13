
import axios from 'axios'
import React, { useReducer } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

let initiaState = {}


const reducer = (state, action) => {
    switch (action.type) {

        case 'data': {
            return {
                ...action.payload
            }
        }

        case 'name': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'price_starts_from': {
            return {
                ...state,
                price_starts_from: Number(action.payload)
            }
        }
        default:
            throw new Error('Error')
    }
}



export default function Edit() {

    const {id}  = useParams()

    const navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, initiaState)

    React.useEffect(() => {
        fetchAndPopulate(id)
    }, [id])


    function fetchAndPopulate(id) {

        axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}/${id}`
        })
            .then((data) => {
              
                dispatch({ type: 'data', payload: data.data })
            })
            .catch((err) => {
                console.log(err)
            })

    }



    const handlechange = (e) => {
        const { name, value } = e.target;
       
        dispatch({ type: name, payload: value })

    }


    const handleclick = () => {

        console.log(state)


        axios({
            method: 'patch',
            url: `${process.env.REACT_APP_BASE_URL}/${id}`,
            data: state
        })
            .then((data) => {

                alert('Edited');

                navigate('/')

            })
            .catch((err) => {
                console.log(err)
            })


    }



    return <div>

        <input type="text" placeholder='enter name' name='name' value={state.name} onChange={(e) => handlechange(e)} />
        <input type="number" placeholder='enter price' name='price_starts_from' value={state.price_starts_from} onChange={(e) => handlechange(e)} />

        <button onClick={handleclick}>Update</button>

    </div>



}