import './App.css';

function App() {
  const word = "Hello"

  return (
    <div className="App">
      <h1>Main</h1>
      <div>
        {word.split("").map(char => <button>{char}</button>)}
      </div>
    </div>
  );
}

export default App;
