import React from 'react';
import logoHeader from './Images/MYtineraryLogo.png';
import logoButton from './Images/circled-right-2.png';
import {Link} from "react-router-dom";
import NavBar from './NavBar';
import Carousel from './Carousel'


class Home extends React.Component{
    render(){
        return <div>
          <NavBar />
            <header><img className="App-logo" src={logoHeader} alt="logoHeader"/></header>
            <section>
   
         <h4>Find your perfect trip, designed by insiders who know and love their cities</h4>
         
         <div >
           <button>
             
           <Link to="/Browsing"><img className="App-button" src={logoButton} alt="logoButton"/></Link>
           </button>
   
         </div>
   
         <h5>Popular MYtineraries</h5>
         
       <Carousel />
        </section>
   
   
        <footer> 

        <Link to="/Cities">cities</Link>
          
        </footer>
        
        </div>;
    }
}

export default Home;