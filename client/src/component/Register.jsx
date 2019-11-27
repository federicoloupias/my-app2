import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { Alert } from 'reactstrap';
import { clearErrors } from '../actions/errorsActions'


class Register extends React.Component{
  state = {
      users: [] ,
      username: '',
      email:'',
      password:'',
      msg: null
    };

    static propTypes = {
        isAuthenticated:PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
  
    componentDidUpdate(prevProps){
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            //Check por el error del registro
            if(error.id === 'REGISTER_FAIL'){
                this.setState({ msg: error.msg.msg })
            } else{
                this.setState({ msg:null })
            }
        }
    }

  

  getUsers= async () =>{
    const res = await axios.get ('http://localhost:8080/api/users');
    this.setState({users: res.data});
  }

  onChange = e =>{
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async e =>{
    e.preventDefault();
    const { name, email, password } = this.state
    
    //Creo objeto usuario
    const user = {
      name,
      email,
      password
    }
    // Intenta registrar
    this.props.register(user)
    
    /*const res = await axios.post('http://localhost:8080/api/auth/register', user)
    

    this.getUsers()

    console.log(this.state.users)

    this.setState({
      username: '',
      email:'',
      password:''
    })*/


  }


    render(){
        return( 
           
        <form onSubmit= { this.onSubmit }>
            <h1>Register---</h1>
          <h1>Unite a nuestra comunidad!</h1>


          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              onChange= { this.onChange }
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              onChange= { this.onChange }
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="form-control"
              />
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              onChange= { this.onChange }
              type="password"
              name="password"
              id="password"
              placeholder='password'
              className="form-control"
              />
          </div>

            {this.state.msg ? (<Alert color='danger'> {this.state.msg}</Alert>) : null}
          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Register
            </button>
          </div>


        </form>
        
        );
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});



export default connect(mapStateToProps,{ register, clearErrors })(Register);