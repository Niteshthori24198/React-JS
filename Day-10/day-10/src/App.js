
import './App.css';

import { Route, Routes, Link } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'

function App() {
  return (
    <div className="App">

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>


    </div>
  );
}

export default App;
