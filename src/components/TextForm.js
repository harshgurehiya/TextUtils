import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleCopy = ()=>{
        let newtext = document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value)
    }
    const clearText = ()=>{
        let newtext = "";
        setText(newtext);
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }


  const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear All</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        {/* Search in google time to read one word - which is 0.008minutes per word */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
