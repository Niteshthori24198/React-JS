
import './App.css';

import Button from './Button';
import Condition from './Condition';
import Russian from './Russian';

function App() {


  const RussianData = [

    {
      id: 1,
      image: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      Name: "Best PM"

    },

    {
      id: 2,
      image: "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/148-shutterstock_128569691.jpg",
      Name: "Islamik"

    }


  ]


  const data = {
    text: "Click Me",
    handleclick: () => {
      alert('Clicked Successfully')
    }
  }
  const data2 = {
    text: "Click Here",
    handleclick: () => {
      alert('Welcome !!')
    }
  }

  return (
    <div className="App">

      <h2>Welcome to React.</h2>

      <Button data={data} />

      <Button data={data2} />

      <Condition />

      <Russian data={RussianData}/>

    </div>
  );


}

export default App;
