import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import itinerarioReducer from './itineraryReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    item : itemReducer,
    itinerario : itinerarioReducer,
    error: errorReducer,
    auth: authReducer,
})
export default rootReducer