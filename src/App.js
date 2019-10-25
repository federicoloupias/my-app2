import React from 'react';
import Home from './component/Home'; 
import NavBar from './component/NavBar';

import StepperPrueba from './component/StepperPrueba.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <StepperPrueba />
    </div>
    
  );
}

export default App;
