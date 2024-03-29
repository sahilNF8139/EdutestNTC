import React, { useState, useEffect } from 'react';
import Phone from './Component/Phone';
import OtpFinal from './Component/OtpFinal';
import Personalpage from './Component/personal';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  useEffect(()=>{
    
    if(window.location.href==window.location.origin+'/'){
      window.location.href=window.location.origin+'/login'
    }
  },[])   

 
  return (
    <div className="App">

      <Router>
      <Routes>
      
      <Route exact path="/login" element={<Phone />} />
      <Route exact path="/otp" element={<OtpFinal />} />
      <Route exact path="/personal" element={<Personalpage />} />    
      </Routes>
  </Router>
    </div>
  );
}

export default App;
