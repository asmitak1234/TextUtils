import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case!!","success");

  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lower Case!!","success");
  }
  const handleclearClick=()=>{
    let newText="";
    setText(newText);
    props.showalert("Text Cleared!!","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied to Clipboard!!","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleExtraspaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra Spaces Removed!!","success");
  }
  
  const [text,setText]=useState();

  return (
    <>
          <div className='container'  style={{color: props.mode==='dark'?'white':'#042743',}} >
            <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control hii" placeholder='Enter Text Here' value={text} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#042743',}} onChange={handleOnChange} id="mytext" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1' onClick={handleclearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraspaces}>Remove Extra Spaces</button>
            {/* alternating,capitalised,download */}
          </div>
          <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#042743',}}>
            <h4>Your Text Summary</h4>
             <p> {text.split().length} Words {text.length} Characters </p>
             <p>  {0.008*text.split().length} Minutes to read</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:"Enter text in textbox to reflect here."}</p>
          </div>
    </>
  );
}