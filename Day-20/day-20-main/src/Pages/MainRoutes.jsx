import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AddTodo from '../Component/AddTodo'
import TodoItems from '../Component/TodoItems'
import Login from './Login'
import Counter from '../Component/Counter'
import PrivateRoute from '../PrivateRoutes/PrivateRoute'

function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<h2>Welcome to Home</h2>} />
                <Route path='/login' element={<Login />} />
                <Route path='/counter' element={
                    <PrivateRoute>

                        <Counter />
                    </PrivateRoute>

                } />
                <Route path='/addtodo' element={
                    <PrivateRoute>
                        <AddTodo />
                    </PrivateRoute>

                } />
                <Route path='/showtodo' element={
                    <PrivateRoute>
                        <TodoItems />
                    </PrivateRoute>

                } />
                <Route path='*' element={<h2>Page Not Found</h2>} />
            </Routes>
        </div>

    )
}

export default MainRoutes
