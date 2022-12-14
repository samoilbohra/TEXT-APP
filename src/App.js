import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import About from './components/about';
import Navbars from './components/navbar'
import Textform from './components/textform'
import Alert from './components/alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'light mode enabled');

    }
    else {

      setMode('dark');
      document.body.style.backgroundColor = '#010d19'
      showAlert('success', 'Dark mode enabled')


    }
  }

  return (
    <Router>
      <div>
        <Navbars mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        <Route path="/TEXT-APP" element={<div className='container'><Textform heading='SAMOIL BOHRA' mode= {mode} showAlert= {showAlert}/> </div>} />
        <Route path="about" element={ <About mode= {mode} /> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
        {/*  
 <Routes>
        <Route path="/about">
          <About  />
        </Route>
       
        <Route path="/">
       
        </Route>
      </Routes> */}
{/* 
        <div className='container'><Textform heading='SAMOIL BOHRA' mode= {mode} showAlert= {showAlert}/> </div>
     <About id='sam' /> */}
      </div>
    </Router>
  );
}

export default App;
