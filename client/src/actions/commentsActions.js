import {GET_COMMENTS} from './types';
import axios from 'axios';

export const getComments = (id) => async dispatch => {
  await axios.get(`http://localhost:8080/api/itinerary/coments/${id}`)
    .then(res => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    })
    .catch(e  => {
      console.log(e)
    })
}

