
import './App.css';
import Cart from './Cart';

function App() {

  let cartitems = [

    {

      id:1,
      title:'Chai',
      price:10,
      quantity:1

    },
    {

      id:2,
      title:'Coffe',
      price:20,
      quantity:4

    },
    {

      id:3,
      title:'Cold Drink',
      price:50,
      quantity:2

    }


  ]


  return (
    <div className="App">

      <Cart cartitems={cartitems} />
      
    </div>
  );
}

export default App;
