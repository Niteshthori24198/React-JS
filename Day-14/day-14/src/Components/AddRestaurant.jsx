
import {useReducer} from 'react'

import axios from 'axios'

 

const initiaState = {
    name:'',
    price_starts_from:0
}


const reducer = (state,action)=>{
    switch(action.type){

        case 'name':{
            return {
                ...state,
                name:action.payload
            }
        }
        case 'price_starts_from':{
            return {
                ...state,
                price_starts_from:action.payload
            }
        }
        case 'reset':{
            return {
                ...initiaState
            }
        }
        default:
            throw new Error('Error')
    }
}



export default function AddRestaurant(){

    const [state,dispatch] = useReducer(reducer,initiaState)

    const handlechange = (e)=>{
        const {name,value} = e.target;
        dispatch({type:name,payload:value})
    }


    const handleclick = ()=>{

        console.log(state)
        
        
        axios({
            method:'post',
            url:`${process.env.REACT_APP_BASE_URL}`,
            data:state
        })
        .then((data)=>{

            alert('Added')

            dispatch({type:'reset'});
        })
        .catch((err)=>{
           console.log(err)
        })

        
    }

    return <div>

        <input type="text" placeholder='enter name' name='name' value={state.name} onChange={(e)=>handlechange(e)} />
        <input type="number" placeholder='enter price' name='price_starts_from' value={state.price_starts_from} onChange={(e)=>handlechange(e)} />

        <button onClick={handleclick}>Create</button>

    </div>

}