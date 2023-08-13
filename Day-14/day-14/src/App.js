
import './App.css';

import {Routes,Route,Link} from 'react-router-dom'
import Restaurant from './Components/Restaurant';
import AddRestaurant from './Components/AddRestaurant';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/Create"}>Create</Link>

      </div>

      <Routes>
        <Route path='/' element={<Restaurant />} />
        <Route path='/create' element={<AddRestaurant />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
     
    </div>
  );
}

export default App;
