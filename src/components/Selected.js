export const Selected = ({element, setElement, char }) => {
  return <button onClick={() => {
    if(element === ""){
      setElement(char)
    } else {
      setElement("")
    }
  }}>{char}</button>
}