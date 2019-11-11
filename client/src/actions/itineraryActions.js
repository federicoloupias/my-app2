import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, CITIES_FILTER } from './types';

export const getItems = () => async dispatch =>{
    dispatch(setItemsLoading());
    await axios
    .get('api/itinerary')
    .then(res => 
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        })
        )
   
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}