import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'

import About from '../Pages/About.jsx'

import Product from '../Pages/Product'
import Book from '../Pages/Book'

export default function AllRoute() {
    
    return <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/book/:id' element={<Book />} />

    </Routes>
}