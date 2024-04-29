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
    //var text=document.getElementById("mytext");
    //text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
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
  
  const [text,setText]=useState("");
  return (
    <>
          <div className='container'  style={{color: props.mode==='dark'?'white':'#042743',}} >
            <h2 className='mt-2 mb-2'> Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Copy Text, Lower case to Upper case, Upper case to Lower case</h2>
            <h3 className=' mt-4 mb-2'>{props.heading}</h3>
            <div className="mb-3">
              <textarea className="form-control hii" placeholder="Enter Your Text Here..." value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='dark'?'white':'#042743',}} onChange={handleOnChange} id="mytext" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearClick}>Clear Text</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraspaces}>Remove Extra Spaces</button>
            {/* alternating,capitalised,download */}
          </div>
          <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#042743',}}>
            <h4>Your Text Summary</h4>
             <p> {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words {text.length} Characters </p>
             <p>  {0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
            <h5>Preview</h5> 
             <p>{text.length>0?text:"Nothing to Preview..."}</p>
          </div>
    </>
  );
}