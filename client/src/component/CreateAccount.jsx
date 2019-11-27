import React from 'react';
import SignupForm from './SignupForm';
import Register from './Register'
class CreateAccount extends React.Component{
    render(){
        return( 
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <Register />
          </div>
        </div>  
        ) ;
  }
}

export default CreateAccount;