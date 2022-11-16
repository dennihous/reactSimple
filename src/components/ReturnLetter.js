// const props = {char, handleClick}

export const ReturnLetter = ({highLightLetter, letter}) => {
  return <button onClick={() => highLightLetter(letter)}>{letter}</button>
}

