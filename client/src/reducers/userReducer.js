import {
    ADD_FAV,
    REMOVE_FAV,
    ADD_COMENT
} from '../actions/types';

const inicialState = {
    user: null,
    itineraryId : []
};

export default function (state = inicialState, action) {
    switch (action.type) {
        case ADD_FAV:
            const userId = action.payload._id;
            const itineraryId=action.payload.itinerariesFav
            return {
                ...state,
                user: userId,
                itineraryId: itineraryId
            };
            case REMOVE_FAV:
                
            const usId = action.payload._id;
            const itinId=action.payload.itinerariesFav
            return {
                ...state,
                user: usId,
                itineraryId: itinId
            };
            case ADD_COMENT:
                
            const user = action.payload._id;
            const itinerId=action.payload.itinerariesFav
            return {
                ...state,
                user: user,
                itineraryId: itinerId
            };
                default:
                    return state;
    }
}