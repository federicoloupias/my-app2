import axios from 'axios';
import {
    ADD_FAV
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