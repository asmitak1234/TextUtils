import React from 'react'

export default function About(props) {
    // const [mystyle,setmystyle]=useState({
    //     color:"black",
    //     backgroundColor:"white",
    // })
    
    let mystyle={
       color: props.mode==="dark"?"white":"#042743",
       backgroundColor:props.mode==="dark"?"rgb(34,74,104)":"white",
    }

  return (
    <>
          
            <div className='container' style={{color:props.mode==="dark"?"white":"#042743",}} > 
            <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                TextUtils gives a way to analyze your text quickly anf efficiently. Be it word count,character count or the time to read the text in minutes.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a givrn text.  TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
               This word counter software works in any browsers such as Chrome,Firefox,Internet Explorer, Safari , Opera. It suits to word count characters in facebook, blog, books, excel documents, pdf documents, essays, etc. 
            </div>
            </div>
        </div>
        </div>
            </div>
    </>
  )
}
