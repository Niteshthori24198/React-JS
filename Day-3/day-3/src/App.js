
import React from 'react';
import './App.css';
import Button from './Button';
import Mybutton from './Mybutton';

function App() {


  const [count , setcount] = React.useState(0);

  const handleclick = ()=>{
    setcount(count+1);
  }


  return (
    <div className="App">

      {/* maintaining state at child for each button */}

      <Button />
      <Button />

      {/* 
      Now we do "State Upliftment" by maintaining state at parent level and passing it as props to all child components */}

      <Mybutton handleclick={handleclick} count={count}/>
      <Mybutton handleclick={handleclick} count={count}/>


    </div>
  );
}

export default App;
