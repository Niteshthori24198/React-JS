import './App.css';
import Kishan from './Kishan';
import Nitesh from './Nitesh';
import ReducerCount from './ReducerCount';
import RefComponent from './RefComponent';



function App() {
  return (
    <div className="App">

    
      <Nitesh />

      <Kishan start={'forward'} />

      <ReducerCount />

      <RefComponent />

      
    </div>
  );
}


export default App;
