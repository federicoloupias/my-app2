import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types';

const initialState = {
    items:[
       { name: "Barcelona", country: "Spain" },
       { name: "Paris", country: "Francia" },
       { name: "London", country: "UK" },
    ]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
    
        default:
            return state;
    }
}