import React from "react";

function Todo() {

    const [inpval, setinpval] = React.useState('');

    const [todos, settodos] = React.useState([]);


    const handleinpchange = (e) => {
        setinpval(e.target.value)
    }

    const handleclick = () => {

        console.log('click hua')

        const newtodo = {
            title: inpval,
            status: false
        }

        console.log(newtodo)

        settodos([...todos, newtodo]);

        setinpval('')


    }


    const handledelete = (id) => {

        let temp = [...todos];

        temp = temp.filter((e, i) => {
            return i !== id
        })

        settodos([...temp])

    }

    const handletoggle = (id) => {

        let temp = [...todos];

        temp = temp.map((e, i) => {
            if(i === id){
                e.status=!e.status;
            }
            return e;
        })

        settodos([...temp])
    }


    return <>

        <Addtodo inpval={inpval} handleclick={handleclick} handleinpchange={handleinpchange} />

        <Display todo={todos} handledelete={handledelete} handletoggle={handletoggle} />

    </>




}



function Addtodo({ inpval, handleclick, handleinpchange }) {

    return <div>

        <input type="text" placeholder="task name" value={inpval} onChange={(e) => handleinpchange(e)} />

        <button onClick={handleclick}>Add Todo</button>

    </div>
}



function Display({todo, handledelete, handletoggle}) {

    console.log("------->",todo)

    return <>

        {todo.map((e, i) => {

            return <div key={i}>

                <p>{e.title}</p>
                <p>{e.status ? "Completed" : "Pending"}</p>
                <button onClick={(e) => handletoggle(i)}>Toggle</button>
                <button onClick={(e) => handledelete(i)}>Delete</button>

            </div>

        })}

    </>
}



export default Todo;