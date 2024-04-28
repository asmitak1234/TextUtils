import React,{ useState } from 'react';
import Alert from './components/Alert';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

export default function App() {
  const [mode,setmode]=useState('light');

  const [alert, setalert] = useState(null);
  
  const showalert=(message,type)=>{
       setalert({
        msg:message,
        type:type,
       })
       setTimeout(() => {
        setalert(null);
       }, 1500);
  }

  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("Light Mode is Enabled","success");
    }
    else{
      setmode("dark");
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode is Enabled","success");
    }
  }
 
  return (
      <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutt="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About/>}/> */}
            {/* <Route path="/"  element= */}
            <TextForm showalert={showalert} heading="Enter text to analyse" mode={mode} toggleMode={toggleMode}/>
          {/* </Routes> */}
      </div>
      {/* </Router> */}
      </>
  );
}
