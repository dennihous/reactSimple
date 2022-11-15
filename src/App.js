import './App.css';

function App() {
  const word = "Hello"

  const handleClick = (char) => {
    console.log("Clicked the", char)
  }

  return (
    <div className="App">
      <h1>Main</h1>
      <div>
        {word.split("").map(char => (
        <button onClick={() => handleClick(char)}>{char}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
