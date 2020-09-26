import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import watchlistReducer from "./watchlistReducer"


export default combineReducers({
    movies: searchReducer,
    users: userReducer,
    watchlist: watchlistReducer,
})