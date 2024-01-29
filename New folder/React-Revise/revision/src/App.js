
import React from 'react';
import './App.css';
import Pin from './Component/Pin';
// import Counter from './Component/Counter';
// import Counter1 from './Component/Counter1';
// import FormWithReducer from './Component/FormWithReducer';
// import Debounce from './Component/Debounce';
// import Timer from './Component/Timer';
// import Input from './Component/Input';


function App() {

  

  return (
    <div className="App">

      {/* <Counter />
      <Counter1 />
      <FormWithReducer />
      <Debounce />
      <Timer />
      <Input /> */}
      <Pin maxChar={2} length={4}/>
    </div>
  );
}

export default App;

