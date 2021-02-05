import {combineReducers} from "redux"

import MoviesReducer from "./Movies"
import SearchReducer from "./Search"

const rootReducer=combineReducers({
    movies:MoviesReducer,
    Search:SearchReducer

})

export default rootReducer