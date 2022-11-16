import './App.css';
// import { ReturnLetter } from "./components/ReturnLetter";
import { Element } from "./components/Element";
import { Letters } from "./components/Letters";
import React, { useState } from 'react';

function App() {
  const word = "Dennis"
  const [element, setElement] = useState("");

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <Letters setElement={setElement} word={word} />
      <Element element={element} />
    </div>
  );
}

export default App;
