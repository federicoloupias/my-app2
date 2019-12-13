import axios from 'axios';
import { GET_ACTIVITIES, ITEMS_LOADING } from './types';

export const getActivities = (itineraryId) => async (dispatch) =>{
    const response = await axios.get('/api/activities/'+itineraryId);
    dispatch({
      type:GET_ACTIVITIES,
      payload:response.data
  })
    
      
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}