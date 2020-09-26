import {
    ADD_WATCHLIST,
    FETCH_WATCHLIST,
    REMOVE_WATCHLIST,
    LOADING,
} from "../actions/types";


const initialState = {
   
    addtowatch: [],
    watchmovies: [],
    loading: false,
    
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_WATCHLIST:
            return {
                ...state,
                addtowatch: action.payload,
                loading: false,
            };
        case FETCH_WATCHLIST:
            return {
                ...state,
                watchmovies: action.payload,
                loading: false,
            };    
        case REMOVE_WATCHLIST:
            return {
                ...state,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };  
        default:
            return state;  
    }
}