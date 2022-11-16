import './App.css';
import { ReturnLetter } from "./components/ReturnLetter";

function App() {
  const word = "Hello"
  const [letter, setLetter] = useState("");

  const handleClick = (char) => {
    console.log("Clicked the", char)
  }

  return (
    <div className="App">
      <h1>Main</h1>
      <div>
        {word.split("").map(char => {
        return <ReturnLetter letter={char} handleClick={handleClick} />
        })}
      </div>
    </div>
  );
}

export default App;
