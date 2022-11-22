import { Selected } from "./Selected"

export const OnClick = ({word, setElement, element}) => {
  return <div> {word.split("").map(char => {
    return <Selected element={element} setElement={setElement} char={char} />
  })}
</div>
}