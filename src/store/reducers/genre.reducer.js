import { SUCCESS_GET_GENRE } from "../action_types/movies";

export default function genreReducer(state = { genre: [] }, action) {
  if (action.type === SUCCESS_GET_GENRE)
    return { ...state, genre: action.genre };
  else return state;
}
