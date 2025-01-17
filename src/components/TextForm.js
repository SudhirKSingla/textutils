import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handle was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success')
  }
  const handleLoClick = () => {
    // console.log("handlelo was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to Lowercase!', 'success')
  }

  // const handleUpLoClick = () => {
  //   // console.log("handleUplo was clicked");
  //   let newText = () => {
  //     let n = { text };
  //     if (n === text.toUpperCase) {
  //       return n.toLowerCase;
  //     }
  //     else {
  //       return n.toUpperCase;
  //     }
  //   }
  //   setText(newText)
  // }

  const handleSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed!', 'success')
  }
  
  const handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copied to Clipboard!', 'success')
  }

  const handleOnChange = (event) => {
    console.log('handle on')
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleUpLoClick}>Inverse case</button> */}
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Space</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes reading time</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to preview here"}</p>
      </div>
    </>
  )
}
