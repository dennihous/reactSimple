export const Selected = ({element, setElement, char }) => {
  return <button onClick={() => {
    console.log(element)
    if(element === ""){
      setElement(char)
    } else {
      setElement("")
    }
  }}>{char}</button>
}