import React from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../initializers/firebase';

import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import { logInGoogle } from '../actions/authActions';

import { connect } from 'react-redux';

class LogInGoogle extends React.Component{
constructor(props){
    super(props);
    this.login=this.login.bind(this);
    this.state = {
        userLoggedIn:false
    };
}

static propTypes = {
    logInGoogle: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  };

componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
if(user){
    this.setState({
        userLoggedIn: true
    })
}else{
    this.setState({
        userLoggedIn: false
    })
}
    })
}



login(){
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
    .then(res => {
       console.log(res)
       this.props.logInGoogle(res.credential)
    }).catch(err =>{
        
        console.log(err)

    })
}




showButton(){
    if(this.state.userLoggedIn){
        
    }else{
        return <Button variant="contained" onClick={this.login}>
        LogIn With google
        </Button >
    }
}


    render(){

        return(
        <div>
        
        {this.showButton()}

        </div>
        ) 
    }
}



export default connect(
    null,
    { logInGoogle, logout }
  )(LogInGoogle);