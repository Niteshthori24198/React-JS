
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import AddTodo from '../Pages/AddTodo'
import Todo from './Todo'

import Login from '../Pages/Login'
import PrivateRoute from '../PrivateRoutes/PrivateRoute'
import Logout from '../Pages/Logout'


export default function AllRoutes() {
    return <>

        <Routes>

            <Route path='/Home' element={<Home />} />
            <Route path='/Add-Todo' element={
                <PrivateRoute>
                    <AddTodo />
                </PrivateRoute>
            } />
            <Route path='/Todo' element={<PrivateRoute><Todo /></PrivateRoute>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Logout' element={<Logout />} />
            <Route path='/Edit-Todo/:id' element={<PrivateRoute>
                <AddTodo />
            </PrivateRoute>} />


        </Routes>


    </>
}