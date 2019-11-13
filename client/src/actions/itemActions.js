import axios from 'axios';
import { GET_ITEMS,ITEMS_LOADING, CITIES_FILTER } from './types';

export const getItems = () => async dispatch =>{
    dispatch(setItemsLoading());
    await axios
    .get('api/cities')
    .then(res => 
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        })
        )
   
};

export const getFilter = (data) => {

        return{ 
            type:CITIES_FILTER,
            payload:data }    
        
   
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}