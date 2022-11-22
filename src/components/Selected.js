export const Selected = ({element, setElement, char }) => {
  return <button onClick={() => {
    console.log(element)
    if(element === "" || element !== char){
      setElement(char)
    } else {
      setElement("")
    }
  }}>{char}</button>
}