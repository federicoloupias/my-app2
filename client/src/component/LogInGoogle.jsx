import React from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../initializers/firebase';

class LogInGoogle extends React.Component{
constructor(props){
    super(props);
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this)
    this.state = {
        userLoggedIn:false
    };
}

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
    }).catch(err =>{
        
        console.log(err)
    })
}


logout(){
    firebase.auth().signOut()
    .then(result => { 
        console.log(result)
    }).catch(err =>{
        console.log(err)
    })
}

showButton(){
    if(this.state.userLoggedIn){
        return <Button variant="contained" onClick={this.logout} >
        LogOut  Google
        </Button>
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

export default LogInGoogle;