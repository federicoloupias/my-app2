import axios from 'axios';
import {
    ADD_FAV,
    REMOVE_FAV
} from '../actions/types';

export const addFav = (email, itineraryId) => async (dispatch) => {
   
    // Request body

    await axios.post ('http://localhost:8080/api/users/'+email+'/'+itineraryId)
    .then(res => dispatch ({
        type: ADD_FAV,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    });
}

export const removeFav = (email, itineraryIdRemove) => async (dispatch) => {
   
    // Request body

    await axios.delete ('http://localhost:8080/api/users/'+email+'/'+itineraryIdRemove)
    .then(res => dispatch ({
        type: REMOVE_FAV,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    });
}