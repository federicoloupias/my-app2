import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCES,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_GOOGLE_SUCCESS
} from '../actions/types';

const inicialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = inicialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                    isAuthenticated: true,
                    isLoading: false
            }
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCES:
            case REGISTER_FAIL:
                localStorage.removeItem('token')
                return {
                    ...state,
                    token: null,
                        user: null,
                        isAuthenticated: false,
                        isLoading: false
                }
            case REGISTER_GOOGLE_SUCCESS:
                return{
                    isAuthenticated: true,
                }
                default:
                    return state;
    }
}