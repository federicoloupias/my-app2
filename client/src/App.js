import React, { Component } from 'react';
import Home from './component/Home'; 
import CitiesList from './component/CitiesList'
import Itinerary from './component/Itinerary'

import { Provider } from 'react-redux';
import store from './store';
import NavBar from './component/NavBar';
import NavBarRedux from './component/NavBarRedux';
import { loadUser } from './actions/authActions'

import Carousel from './component/Carousel.jsx'
import './App.css';


class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){ 
  return (
      <div className="App">
        <NavBarRedux />
        <Home />
        
      </div>
    
  );
 }
}

export default App;
