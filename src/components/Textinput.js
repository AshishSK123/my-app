import React, { useState } from 'react'

export default function Textinput(props) {

  const [Text, setText] = useState(props.input)

  function onChangehandle(event) {
    setText(event.target.value);
    
  }

  function toUpperCase() {
    setText(Text.toUpperCase());
    props.alert("Converted to Upper Case")
  }

  function toLowerCase() {
    setText(Text.toLowerCase());
    props.alert("Converted to Lower Case")
  }

  // to split words by blank spaces for words count
  function wordCal() {
    let count = 0;
    count = Text.split(" ").filter((element) => {
      return element.length !== 0;
    }).length
    return count
  }

  // to ignore blank spaces during characters count
  function wordChar() {
    let count = 0;
    count = Text.split("").filter((element) => {
      return element !== ' ';
    }).length;
    return count;
  }

  function clearText() {
    setText('');
    props.alert("Text Cleared")
  }


  
  

  return (
    <form className='my-3' style={props.mode === 'light' ? { color: 'black' } : { color: 'white' }}>
      <div className="form-group">
        <label htmlFor="inputText"><strong><h2>Enter Text to convert</h2></strong></label>
        <textarea onChange={onChangehandle} className="form-control" id="inputText" value={Text} rows='8' />
      </div>

      <button type="button" onClick={toUpperCase} className="btn btn-primary mx-1 my-2">UpperCase</button>
      <button type="button" onClick={toLowerCase} className="btn btn-primary mx-1 my-2">LowerCase</button>
      <button type="button" onClick={clearText} className="btn btn-primary mx-4 my-2">Clear</button>
      <div>
        <p>Words : {wordCal()} and Characters : {wordChar()} </p>
        <p>Time required to read : {(0.008 * wordChar()).toPrecision(2)} Min</p>
      </div>
    </form>
  )
}
