import './App.css';

import React from 'react'
import Fc from './Fc';

function App() {
  return (
    <div className="App">

      <Mycomp />

      <Nitesh />

      <Fc />

      
    </div>
  );
}


function Nitesh(){

  // this is JSX code which our browser js doesn't understood. so internally @Babel converts it into js code which brower understood. 
  
  // let ele = React.createElement('h2', {className:'mytext'}, "Welcome to React.") and rendered into web page


  return <>
  <h2 className='mytext'>Welcome to React.</h2>
  </>
}


function Mycomp(){

  // react way to create element : 
  // first element name , then in { we write classes, id and attributes} then we pass it's child part [it could be another element too]


  let ele=React.createElement("h1",{className:"mytext"}, "Hello ! React");

  let image = React.createElement("img", {id:"pic", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYmCsw3aTjkeKvlVv4ZgGlylFzBq1IzgVCF7EUFG2&s"},null)

  console.log(ele)

  React.createElement('button', {className:'mybtn'}, "Click me First")

  let mailelement = React.createElement('div' , {id:'parentdiv'} , [React.createElement('button', {className:'mybtn'}, "Click me First"),React.createElement('button', {className:'mybtn'}, "Click me Second")  ] )

  return <>{ele}{image}{mailelement}</>

}


export default App;
