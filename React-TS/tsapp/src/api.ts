import axios from "axios"
import { Todo } from "./interface";



export const addTodo = async (payload: Todo) => {

    try {
        axios({
            url: 'http://localhost:3001/todos',
            method: 'post',
            data: payload
        })

    } catch (error) {
        console.log(error);

    }

}



export const getTodo = async () => {

    let res = await axios.get('http://localhost:3001/todos')

    return res.data

}


export const toggleTodo = async (id: number, status: boolean) => {
    let res = await axios.patch(`http://localhost:3001/todos/${id}`, { status: !status })
    return res.data
}