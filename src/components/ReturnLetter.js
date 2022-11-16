// const props = {char, handleClick}

export const ReturnLetter = (props) => {
  return <button onClick={() => props.highLightLetter(props.letter)}>{props.letter}</button>
}