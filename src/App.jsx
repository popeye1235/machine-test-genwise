import React from "react";
import './App.css'
import ButtonComp from "./ButtonComp";

function App() {
  const buttonRef = React.useRef();
  console.log("rendering app");
  return (
    <>
         <div className="App">
        <h1>Button click counter</h1>
        <ButtonComp ref={buttonRef} />
      </div>
    </>
  )
}

export default App
