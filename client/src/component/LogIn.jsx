import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import {Link} from "react-router-dom";

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  
  this.onChange= this.onChange.bind(this)
  this.onSubmit= this.onSubmit.bind(this)

  }


  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async e =>{
    e.preventDefault();

    const user = {
      email:this.state.email,
      password:this.state.password
    }
    
    const res = await axios.post('http://localhost:8080/api/auth/login', user)
    
console.log(res)


    this.setState({
      email:'',
      password:''
    })

  }


  render() {
    

    return (
        <div>
      <Form onSubmit= { this.onSubmit }>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <input
              value= { this.state.email }
              onChange= { this.onChange }
              type="text"
              name="email"
              className="form-control"
              />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <input
              value= { this.state.password }
              onChange= { this.onChange }
              type="password"
              name="password"
              className="form-control"
              />
        </FormGroup>
        
        <Button>Submit</Button>
        <br/>
        <br/>
        
        <Link to="/LogIn/Google"><Button>LogIn with Google</Button></Link>
        
      </Form>
      </div>
    );
  }
}

export default LogIn;