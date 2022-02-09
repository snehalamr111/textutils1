import React, { useState } from 'react';

export default function TextForm(props) {
 const handleUpClick=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase","success");
 }
 const handleLowClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase","success");
 }
 const handleClearTextClick=()=>{
   let newText=""
   setText(newText)
   props.showAlert("Text cleared","success");
}
const handleCopyClick=()=>{
   let text=document.getElementById("myBox")
   text.select()
   navigator.clipboard.writeText(text.value)
   props.showAlert("Text Copied","success");
}
const handleExtraSpacesClick=()=>{
   let newText=text.split(/[ ]+/)
   setText(newText.join(" "))
   props.showAlert("Extra spaces removed","success");
}
 const handleOnChange=(e)=>{
    setText(e.target.value)
 }
    const [text,setText]=useState('')

return (
<> <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark' ? 'gray':'white', color:props.mode==='dark' ? 'white':'black'}} id="myBox" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearTextClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
  </div>
  <div className='container' style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
  </div>
  </>
  )
}
