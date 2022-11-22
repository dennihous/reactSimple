import './App.css';
import { Element } from "./components/Element";
import { OnClick } from './components/OnClick';
import React, { useState } from 'react';

function App() {
  const word = "Dennis"
  const [element, setElement] = useState("");

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <OnClick word={word} setElement={setElement} element={element} />
      <Element element={element} />
    </div>
  );
}

export default App;
