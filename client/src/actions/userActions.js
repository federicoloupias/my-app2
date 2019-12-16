import axios from 'axios';
import {
    ADD_FAV,
    REMOVE_FAV,
    ADD_COMENT,
    REMOVE_COMENT,
    EDIT_COMENT
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


export const addComent = ( itineraryId, userId, coment ) => async dispatch => {

    const body = { userId, coment }
    console.log( body  )
    

    await axios.post('http://localhost:8080/api/itinerary/'+itineraryId , body)
    .then(res => dispatch ({
        type: ADD_COMENT,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    });
}

export const borrarComent = ( itineraryId, comentId ) => async dispatch => {
    

    await axios.delete('http://localhost:8080/api/delete'+itineraryId+'/'+comentId)
    .then(res => dispatch ({
        type: REMOVE_COMENT,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    });
}

export const editarComent = ( itineraryId, comentId, newComent, userId ) => async dispatch => {
    

    const body = { comentId, newComent, userId }


    await axios.put('http://localhost:8080/api/edit'+itineraryId, body)
    .then(res => dispatch ({
        type: EDIT_COMENT,
        payload: res.data
    }))
    .catch(err => {
        console.log(err)
    });
}