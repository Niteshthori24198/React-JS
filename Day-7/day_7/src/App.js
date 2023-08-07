
import React from 'react';
import './App.css';
import Timer from './Timer';

function App() {

  const [show, setshow] = React.useState(false)

  return (
    <div className="App">

      {show && <Timer />}
      <button onClick={() => setshow(!show)}>{show ? "Hide timer" : "Show timer"}</button>
     
      
    </div>
  );
}

export default App;
