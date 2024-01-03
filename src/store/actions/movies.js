import { SUCCESS_GET_MOVIES, SUCCESS_GET_GENRE } from "../action_types/movies";
import Swal from "sweetalert2";
const base_url = "https://clean-gold-bracelet.cyclic.app/";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const data = await fetch(`${base_url}/movies`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      if (!data.ok) throw new Error("Fail to get movies");
      const movies = await data.json();
      dispatch({ type: SUCCESS_GET_MOVIES, movies });
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function fetchGenre() {
  return async (dispatch) => {
    try {
      const data = await fetch(`${base_url}/movies/genre`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      if (!data.ok) throw new Error("Fail to get genre");
      const genre = await data.json();
      dispatch({ type: SUCCESS_GET_GENRE, genre });
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function createNewMovie(movie) {
  return async (dispatch) => {
    console.log(movie);
    try {
      let data = await fetch(`${base_url}/movies`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
      if (!data.ok) {
        data = await data.json();
        throw data.message;
      }
      successAlert("new movie success created!");
      dispatch(fetchMovies());
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function updateTheMovie(movie, id) {
  console.log("masuk ommmm");
  return async (dispatch) => {
    try {
      let response = await fetch(`${base_url}/movies/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        response = await response.json();
        throw response.message;
      }
      successAlert("the movie success updated!");
      dispatch(fetchMovies());
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function createGenre(genre) {
  return async (dispatch) => {
    try {
      let response = await fetch(`${base_url}/movies/genre`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genre),
      });
      if (!response.ok) {
        response = await response.json();
        throw response.message;
      }
      successAlert(genre.name + " success created!");
      dispatch(fetchGenre());
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function updateTheGenre(genre) {
  return async (dispatch) => {
    try {
      let response = await fetch(`${base_url}/movies/genre/${genre.id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: genre.name }),
      });
      if (!response.ok) {
        response = await response.json();
        throw response.message;
      }
      successAlert("genre success updated!");
      dispatch(fetchGenre());
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function deleteTheMovie(id) {
  return (dispatch) => {
    try {
      confirmAlert().then(async (result) => {
        if (result.isConfirmed) {
          const data = await fetch(`${base_url}/movies/${id}`, {
            method: "DELETE",
            headers: { access_token: localStorage.getItem("access_token") },
          });
          if (!data.ok) throw Error("Something Wrong");
          Swal.fire("Deleted!", "movie has been deleted.", "success");
          dispatch(fetchMovies());
        }
      });
    } catch (err) {
      errorAlert(err);
    }
  };
}

export function deleteGenre(id) {
  return (dispatch) => {
    try {
      confirmAlert().then(async (result) => {
        if (result.isConfirmed) {
          let response = await fetch(`${base_url}/movies/genre/${id}`, {
            method: "DELETE",
            headers: { access_token: localStorage.getItem("access_token") },
          });
          if (!response.ok) throw new Error("Internal Server Error");
          Swal.fire("Deleted!", "genre has been deleted.", "success");
          dispatch(fetchGenre());
        }
      });
    } catch (err) {
      errorAlert(err);
    }
  };
}

function successAlert(msg) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}

function confirmAlert() {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
}

function errorAlert(msg) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: msg,
  });
}
