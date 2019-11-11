import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING,CITIES_FILTER } from '../actions/types';

const initialState = {
    itineraries:[],
    loading:false
}

export default function(state = initialState, action){
  switch (action.type) {
      case GET_ITEMS:
          return {
              ...state,
              itineraries: action.payload,
              loading:false
          };
        
      case ITEMS_LOADING:
          return{
              ...state,
              loading: true
          }
  
      default:
          return state;
  }
}