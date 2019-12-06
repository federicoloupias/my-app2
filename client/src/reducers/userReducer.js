import {
    ADD_FAV
} from '../actions/types';

const inicialState = {
    user: null,
    itineraryId : []
};

export default function (state = inicialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case ADD_FAV:
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