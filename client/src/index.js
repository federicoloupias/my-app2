import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import LogIn from './component/LogIn';
import Browsing from './component/Browsing';
import CreateAccount from './component/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';


const ruta = (
    <Router>
        <Route exact path = "/" component = {App} />
        <Route path = "/LogIn" component = {LogIn} />
        <Route path = "/CreateAccount" component = {CreateAccount} />
        <Route path = "/Browsing" component = {Browsing} />
    </Router>
)

ReactDOM.render(ruta, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
