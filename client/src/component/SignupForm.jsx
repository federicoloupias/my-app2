import React from 'react';
import axios from 'axios';


class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [] ,
      username: '',
      email:'',
      password:''
    }
  
  this.onChange= this.onChange.bind(this)
  this.onSubmit= this.onSubmit.bind(this)

  }
  

  getUsers= async () =>{
    const res = await axios.get ('http://localhost:8080/api/users');
    this.setState({users: res.data});
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async e =>{
    e.preventDefault();

    const user = {
      username: this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    
    const res = await axios.post('http://localhost:8080/api/register', user)
    
    

    this.getUsers()

    console.log(this.state.users)

    this.setState({
      username: '',
      email:'',
      password:''
    })


  }


    render(){
        return( 
        <form onSubmit= { this.onSubmit }>
          <h1>Unite a nuestra comunidad!</h1>


          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              value= { this.state.username }
              onChange= { this.onChange }
              type="text"
              name="username"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              value= { this.state.email }
              onChange= { this.onChange }
              type="text"
              name="email"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              value= { this.state.password }
              onChange= { this.onChange }
              type="password"
              name="password"
              className="form-control"
              />
          </div>


          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>


        </form>
        





        );
  }
}

export default SignupForm;