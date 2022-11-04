import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from './movieReducer'
import detailReducer from "./detailReducer";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
    movie: movieReducer,
    detail: detailReducer,
    popular: popularReducer,
    search: searchReducer,
});
