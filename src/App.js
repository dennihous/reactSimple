import './App.css';
import { ReturnLetter } from "./components/ReturnLetter";
import React, { useState } from 'react';

function App() {
  const word = "Hello"
  const [element, setElement] = useState("");

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <div>
        {word.split("").map(char => {
        return <ReturnLetter letter={char} highLightLetter={setElement} />
        })}
      </div>
      <h1>{element}</h1>
    </div>
  );
}

export default App;
