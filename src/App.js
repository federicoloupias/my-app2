import React from 'react';
import Home from './component/Home'; 
import NavBar from './component/NavBar';

import Carousel from './component/Carousel.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Carousel />
    </div>
    
  );
}

export default App;
