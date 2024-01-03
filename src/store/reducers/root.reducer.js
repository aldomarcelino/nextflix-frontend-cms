import { combineReducers } from "redux";
import genreReducer from "./genre.reducer";
import moviesReducer from "./movies.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
});

export default rootReducer;
