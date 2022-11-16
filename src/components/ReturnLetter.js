// const props = {char, handleClick}

export const ReturnLetter = (props) => {
  return <button onClick={() => props.handleClick(props.letter)}>{props.letter}</button>
}

// export ReturnLetter