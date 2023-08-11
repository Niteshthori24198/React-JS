
import './App.css';

function Component(props) {

  console.log(props)

  return (
    <div style={{ border: "2px solid black", padding: "21px", width: "50%", margin: "50px auto" }}>

      <p>Ye hai meri Photu</p>

      {props.children}


    </div>
  )


}


function Avatar() {

  return <div>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9oflbSitopud2k005X8CbNM69WnKPFjBHg&usqp=CAU" alt="Photu" />
    <p>Ganja Love</p>
  </div>
}



function Camera(props) {

  return <div style={{ border: "2px solid black", padding: "21px", width: "50%", margin: "50px auto" }}>

    {props.children}
  </div>


}

function ClickPhoto() {

  return <div>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXISA7AWonO3J24GKCgtJ9e4OTuaJHSBM7rcN3j28GfR6eJAJTe1Gi_AlJpG6wuFnCs&usqp=CAU" alt="Camera" />
    <p>Edhr Dekh BSDK</p>
  </div>

}




function App() {
  return (
    <div className="App">

      <Camera>
        <ClickPhoto />
      </Camera>

      <Component>
        <Avatar />
      </Component>


    </div>
  );
}

export default App;
