import {
    ADD_FAV,
    REMOVE_FAV,
    ADD_COMENT,
    REMOVE_COMENT,
    EDIT_COMENT
} from '../actions/types';

const inicialState = {
    user: null,
    itineraryId : []
};

export default function (state = inicialState, action) {
    switch (action.type) {
        case ADD_FAV:
        case REMOVE_FAV:
        case ADD_COMENT:
        case REMOVE_COMENT:
        case EDIT_COMENT:
            const userId = action.payload._id;
            const itineraryId=action.payload.itinerariesFav
            return {
                ...state,
                user: userId,
                itineraryId: itineraryId
            };
                default:
                    return state;
    }
}