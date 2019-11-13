import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import itinerarioReducer from './itineraryReducer'

const rootReducer = combineReducers({
    item : itemReducer,
    itinerario : itinerarioReducer
})
export default rootReducer