import { ReturnLetter } from "./ReturnLetter"

export const Letters = ({setElement, word}) => {
  return <div>{word.split("").map(char => {

   return <ReturnLetter letter={char} handleClick={setElement} />
  })}</div>
}