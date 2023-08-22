
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Admin from './Admin'

function MainRoutes() {


    return (

        <div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='*' element={<h2>Page Not Found</h2>} />

            </Routes>

        </div>

    )
}

export default MainRoutes
