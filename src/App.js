import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/about';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  const [mode, setMode]=useState(`light`);
  const toggleMode=()=>{
    if (mode===`dark`){
      setMode(`light`)
      document.body.style.backgroundColor='white';
    }
    else{
      setMode(`dark`)
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextoUtiles" mode={mode} toggleMode={toggleMode} />
        <div className='container my-4 '>
          <Routes>
            <Route path="/About" element={<About mode={mode} />} />
            <Route path="/" element={<Textarea heading="Enter Your Text To Analyse" mode={mode} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
