import React from "react";

export default function Formele() {

    const data = {
        username: '',
        course: '',
        iscompleted: false
    }

    const [formdata, setformdata] = React.useState(data)


    const handlechange = (e) => {

        const { name, value } = e.target;

        console.log(name, value)

        setformdata({
            ...formdata,
            [name]: value

        })

        console.log(formdata)

    }

    const handlesave = () => {
        fetch(`http://localhost:3001/data`, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',
            },
            body: JSON.stringify(formdata)
        })
            .then((res) => res.json()).then((d) => console.log(d)).catch((err) => console.log(err))
    }

    return <>

        <input type="text" placeholder="enter name" name="username" onChange={(e) => handlechange(e)} />

        <select name="course" onChange={(e) => handlechange(e)}>

            <option value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>

        </select>

        <label>Yes/No</label>
        <input type="checkbox" checked={formdata.iscompleted} onChange={(e) => {
            setformdata({
                ...formdata,
                iscompleted: !formdata.iscompleted
            })

        }} />

        <button onClick={handlesave}>Add</button>

    </>


}