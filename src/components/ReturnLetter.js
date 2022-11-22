export const ReturnLetter = ({handleClick, letter}) => {
  return <button onClick={() => {
    handleClick(letter)
  }}>{letter}</button>
}
