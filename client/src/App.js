import React from 'react';
import Home from './component/Home'; 
import CitiesList from './component/CitiesList'

import { Provider } from 'react-redux';
import store from './store';

import Carousel from './component/Carousel.jsx'
import './App.css';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CitiesList />
        
      </div>
    </Provider>
    
  );
}

export default App;
