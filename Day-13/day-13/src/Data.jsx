import React from "react";



const initialState = {

    loading: true,
    iserror: false,
    data: [],
    pages:[]
}



const reducer = (state, action) => {

    switch(action.type){

        case 'FETACH_BEGIN':{
            
            return {

                loading:true,
                iserror:false,
                data:[],
                pages:[]

            }
        }
        case 'FETACH_SUCCESS':{

            return {

                loading:false,
                iserror:false,
                data:action.payload,
                pages:action.pagearr

            }
        }
        case 'FETACH_ERROR':{

            return {

                loading:false,
                iserror:true,
                data:[],
                pages:[]

            }
        }
        default:{
            throw new Error('Invalid Action detected')
        }

    }
    
}



export default function Data() {


    const [state, dispatch] = React.useReducer(reducer, initialState)

    const [pageno, setpageno] = React.useState(1)


    React.useEffect(() => {

        fetchData(pageno)

    }, [pageno])


    function fetchData(page) {

        dispatch( { type:'FETACH_BEGIN'} )

        fetch(`https://63ca7e2e4f53a00420242ac5.mockapi.io/User?limit=5&page=${page}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {

                let temp = Math.ceil(21 / 5);

                let arr = []

                for (let i = 1; i <= temp; i++) {
                    arr.push(i)
                }

                dispatch( { type:'FETACH_SUCCESS' , payload:data , pagearr:arr} )
            })
            .catch((err) => {

                dispatch( { type:'FETACH_ERROR'} )
        
            })
    }


    function Display({ data }) {

        return <>

            {data.map((ele) => {
                return <div key={ele.id} style={{ border: "1px solid black", width: "50%", margin: "20px auto" }}>

                    <p>Name : - {ele.Name}</p>
                    <p>Age : {ele.Age}</p>
                </div>
            })}

        </>

    }

    function Button({ button }) {

        return <>

            {
                button.map((text,i) => {

                    return <button key={i} onClick={(e) => setpageno(text)}>{text}</button>
                })
            }

        </>


    }

    const {loading , iserror , data , pages} = state;

    console.log(state)

    return <>


        {iserror ? <h2>Error aa gya bc ....🙂</h2> : null}

        {loading ? <h2>Loading ......</h2> : <Display data={data} />}

        <Button button={pages} />

    </>
}
