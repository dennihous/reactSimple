import './App.css';
import { Element } from "./components/Element";
// import { ReturnLetter } from './components/ReturnLetter';
import { OnClick } from './components/OnClick';
// import { Letters } from "./components/Letters";
import React, { useState } from 'react';

// function App() {
//   const word = "Dennis"
//   const [element, setElement] = useState("");

//   return (
//     <div className="App">
//       <br />
//       <br />
//       <br />
//       <Letters setElement={setElement} word={word} element={element} />
      
//     </div>
//   );
// }

function App() {
  const word = "Dennis"
  const [element, setElement] = useState("");

  return (
    <div className="App">
      <OnClick word={word} setElement={setElement} element={element} />
      {/* <Letters setElement={setElement} word={word} element={element} /> */}
      <Element element={element} />
    </div>
  );
}

export default App;
