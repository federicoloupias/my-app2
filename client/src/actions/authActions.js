import axios from 'axios';
import {
    returnErrors
} from './errorsActions'
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCES,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_GOOGLE_SUCCESS,
} from '../actions/types';

import firebase from '../initializers/firebase';

//Check token & load user
export const loadUser = () => (dispatch, getState) => {

    // User loading
    dispatch({
        type: USER_LOADING
    });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch(
            {
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });

}

// Register User
export const register = ({ name, email, password, firstName, lastName, country }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // Request body

    const body = JSON.stringify({ name, email, password, firstName, lastName, country })

    axios.post ('http://localhost:8080/api/users', body, config)
    .then(res => dispatch ({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        });
    });
}


// LogOut User

export const logout = () => {
    firebase.auth().signOut()
    .then(result => { 
        console.log(result)
    }).catch(err =>{
        console.log(err)
    })

    return{
        type: LOGOUT_SUCCES
    }
}


//LogIn User

export const login = ({ email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // Request body

    const body = JSON.stringify({ email, password })

    axios.post ('http://localhost:8080/api/auth', body, config)
    .then(res => dispatch ({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        });
    });
}

export const logInGoogle = (user) => dispatch => {
    if(user){
        dispatch({
            type: REGISTER_GOOGLE_SUCCESS
        });
    }else{
        dispatch({
            type: LOGIN_FAIL
        });
    }
    
}



// Setup config / headers and token
export const tokenConfig = getState => {
    // Gete token from localStorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}