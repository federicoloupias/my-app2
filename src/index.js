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

const ruta = (
    <Router>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
