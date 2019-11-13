import { GET_ITEMS, ITEMS_LOADING, CITIES_FILTER } from '../actions/types';

const initialState = {
    items:[],
    items_filter:[],
    loading:false
}


export default function(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading:false
            };
            case CITIES_FILTER:
            return {
                ...state,
                items_filter: action.payload,
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