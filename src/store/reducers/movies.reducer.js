import { SUCCESS_GET_MOVIES } from "../action_types/movies";

export default function moviesReducer(state = { movies: [] }, action) {
  if (action.type === SUCCESS_GET_MOVIES)
    return { ...state, movies: action.movies };
  else return state;
}
