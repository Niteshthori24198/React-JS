import React from "react";

import axios from 'axios'

export default function Data() {

    const [data, setdata] = React.useState([])

    const [iserror, setiserror] = React.useState(false)

    const [loading, setloading] = React.useState(true)

    const [pageno, setpageno] = React.useState(1)

    const [pages, setpages] = React.useState([])

    React.useEffect(() => {

        fetchData(pageno)

    }, [pageno])


    function fetchData(page) {

        setloading(true)
        setiserror(false)


        axios.get(`https://63ca7e2e4f53a00420242ac5.mockapi.io/User?limit=5&page=${page}`)
            .then((d) => {
                let data = d.data;
                setiserror(false)
                setloading(false)
                setdata([...data])

                let temp = Math.ceil(21 / 5);

                let arr = []

                for (let i = 1; i <= temp; i++) {
                    arr.push(i)
                }

                setpages(arr)
            }).catch((err) => {
                setiserror(true)
                setloading(false)
                console.log(err)
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

        console.log("button", button)

        return <>

            {
                button.map((text) => {

                    return <button onClick={(e) => setpageno(text)}>{text}</button>
                })
            }

        </>


    }

    return <>

        {iserror ? <h2>Error aa gya bc ....🙂</h2> : null}

        {loading ? <h2>Loading ......</h2> : <Display data={data} />}

        <Button button={pages} />

    </>
}
