export const ReturnLetter = ({highLightLetter, letter}) => {
  return <button onClick={() => {
    // console.log(letter)
    // if(letter.length === 0){
    //   highLightLetter("")
    // } else {
    //   highLightLetter(letter)
    // }    
    highLightLetter(letter)
  }}>{letter}</button>
}

