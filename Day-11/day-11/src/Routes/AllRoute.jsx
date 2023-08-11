import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'

import About from '../Pages/About.jsx'

import Product from '../Pages/Product'
import Book from '../Pages/Book'
import Notfound from '../Pages/Notfound'
import Login from '../Pages/Login'
import Car from '../Pages/Car'

import PrivateRoute from '../PrivateRoute/PrivateRoute'

export default function AllRoute() {

    return <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/car' element={
            <PrivateRoute>
                <Car />
            </PrivateRoute>

        } />
        <Route path='/book/:id' element={
            <PrivateRoute>

                <Book />

            </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Notfound />} />

    </Routes>
}