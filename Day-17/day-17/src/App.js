
import './App.css';
import Button from './Component/Button';
import Pin from './Component/Pin';

function App() {
  return (
    <div className="App">

      <Button btncss="btnstyle" bg="bgclr">
        Click Here
      </Button>

      <br></br>
      <br></br>
      
      <Pin length={4} maxChar={1} />

    </div>
  );
}

export default App;
