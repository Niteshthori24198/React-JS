
import './App.css';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';
import Debounce from './Components/Debounce';
import FormwithReducer from './Components/FormwithReducer';
import Throttle from './Components/Throttle';

function App() {
  return (
    <div className="App">

      <Counter1 />
      <Counter2 />

      <FormwithReducer />

      <Debounce />

      <Throttle />
      
    </div>
  );
}

export default App;
