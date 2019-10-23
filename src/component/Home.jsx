import React from 'react';
import logoHeader from './Images/MYtineraryLogo.png';
import logoButton from './Images/circled-right-2.png';
import logoFooter from './Images/homeIcon.png';
import {Link} from "react-router-dom";


class Home extends React.Component{
    render(){
        return <div>
        <header><img className="App-logo" src={logoHeader} alt="logoHeader"/></header>
        <section>
   
         <h4>Find your perfect trip, designed by insiders who know and love their cities</h4>
         <h2>Start browsing</h2>
   
         <div >
           <button>
             
           <Link to="/Browsing"><img className="App-button" src={logoButton} alt="logoButton"/></Link>
           </button>
   
         </div>
   
         <h5>Want to build your own MYtinerary?</h5>
         
         <div>
           <Link to="/LogIn">LogIn</Link>
           <br></br>
           <Link to="/CreateAccount">Create Account</Link>
         </div>
   
        </section>
   
   
        <footer> 
        <Link to="/"><img className="App-footer" src={logoFooter} alt="logoFooter"/></Link>
        </footer>
        
        </div>;
    }
}

export default Home;