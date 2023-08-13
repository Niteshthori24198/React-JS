
import React, { useEffect, useReducer } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'


const initialState = {
    loading: true,
    iserror: false,
    data: []
}



const reducer = (actionstate, actionobj) => {
    switch (actionobj.type) {

        case 'FETCH_BEGIN': {
            return {
                loading: true,
                iserror: false,
                data: []
            }
        }
        case 'FETCH_SUCCESS': {
            return {
                loading: false,
                iserror: false,
                data: actionobj.payload
            }
        }
        case 'FETCH_ERROR': {
            return {
                loading: false,
                iserror: true,
                data: []
            }
        }

        default:
            throw new Error('Invalid Action')

    }
}


export default function Restaurant() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [page,setPage] = React.useState(1)

    const fetchAndRender = (page=1) => {

        dispatch({ type: 'FETCH_BEGIN' })

        axios.get(`${process.env.REACT_APP_BASE_URL}`, {
            params: {
                _page: page,
                _limit: 3
            }
        })
            .then((data) => {
               
                dispatch({ type: 'FETCH_SUCCESS', payload: data.data })
            }).catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
            })

    }

    useEffect(() => {
        fetchAndRender(page)
    }, [page])



    const handledelete = (id)=>{
       
        axios({
            method:'delete',
            url:`${process.env.REACT_APP_BASE_URL}/${id}`
        }).then((data)=>{

            console.log("delete data",data)

            fetchAndRender()

        }).catch((err)=>{
            console.log(err.message)
            dispatch({type:'FETCH_ERROR'})
        })
    }


    function Display({ data }) {
        return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', margin: '25px auto' }}>
            {
                data.map((ele) => {
                    return <div key={ele.id}>
                        <img src={ele.image} alt="Res_Image" />
                        <p>Name : {ele.name}</p>
                        <p>Price : {ele.price_starts_from}</p>
                        <button><Link to={`/edit/${ele.id}`}>Edit</Link></button>
                        <button onClick={()=>handledelete(ele.id)}><Link>Delete</Link></button>
                       
                    </div>

                })
            }
        </div>
    }



    const { loading, iserror, data } = state

    return <div>
        {
            loading ? <h2>Loading ......</h2> : iserror ? <h2>Error aagya bc .....</h2> : <Display data={data} />
        }

        <Paginate />

    </div>



    function Paginate() {

        return <div style={{margin:'50px auto'}}>
        
        <button disabled={page<=1} onClick={()=>setPage(page-1)}>Prev</button>
        <span>{page}</span>
        <button disabled={data.length<=1} onClick={()=>setPage(page+1)}>Next</button>
        
        </div>

    }


}