import './App.css';
// import { Element } from "./components/Element";
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
//       <Letters set={setElement} word={word} />
//       <Element element={element} />
//     </div>
//   );
// }

// function App() {
//   const [word, setWord] = useState("")

//   const handleClick = () => {
//     if(word === ""){
//       setWord("Dennis")
//     } else {
//       setWord("")
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>K</button>
//       <div> {word}</div>
//     </div>
//   )
// }

function App() {
  const word = "Dennis"
  const [element, setElement] = useState("");

  const handleClick = () => {
    console.log(element)
    const hello = "hello"
    if(element === ""){
      setElement(hello)
    } else {
      setElement("")
    }
  }

  return (
    <div className="App">
      <div>
        {word.split("").map(char => {
          return <button onClick={() => handleClick(char)}>{char}</button>
        })}
      </div>
      <h1>{element}</h1>
    </div>
  );
}

export default App;
