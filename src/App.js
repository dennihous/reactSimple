import './App.css';
import { ReturnLetter } from "./components/ReturnLetter";
import { Element } from "./components/Element";
import React, { useState } from 'react';

function App() {
  const word = "Dennis"
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
      <Element element={element} />
    </div>
  );
}

export default App;
