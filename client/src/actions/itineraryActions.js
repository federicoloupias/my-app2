import axios from 'axios';
import { GET_ITINERARIES, ITEMS_LOADING } from './types';

export const getItineraries = (cityId) => async (dispatch) =>{
    await axios
    .get('/api/itinerary/'+cityId)
    .then(res =>{
      
        dispatch({
            type:GET_ITINERARIES,
            payload:res.data
        })
      })
      
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}