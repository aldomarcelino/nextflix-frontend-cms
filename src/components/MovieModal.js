import { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { createNewMovie, updateTheMovie } from "../store/actions/movies";

export default function MovieModal({ open, setOff, setTheMovie, theMovie }) {
  console.log(theMovie);
  const { genre } = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const [cast, setCasts] = useState([{ name: "", profilePict: "" }]);
  const [newGenre, setNewGenre] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    rating: 0,
    imgUrl: "",
  });

  useEffect(() => {
    if (Object.keys(theMovie).length > 0 && open) {
      let temp = theMovie.GenreMovies.map((el) => el.GenreId);
      let temporary = theMovie.MovieCasts.map((el) => el.Cast);
      setNewMovie({
        title: theMovie.title,
        synopsis: theMovie.synopsis,
        trailerUrl: theMovie.trailerUrl,
        rating: theMovie.rating,
        imgUrl: theMovie.imgUrl,
      });
      setCasts(temporary);
      setNewGenre(temp);
    }
  }, [theMovie]);
  const addCast = (e) => {
    e.preventDefault();
    setCasts([...cast, { name: "", profilePict: "" }]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };
  const handleCahageGenre = (e) => {
    setNewGenre([...newGenre, e.target.value]);
  };
  const handleCahageCast = (e) => {
    let [property, index] = e.target.name.split("-");
    const data = [...cast];
    data[index][property] = e.target.value;
    setCasts(data);
  };
  const handleRemove = (index) => {
    let temp = cast.filter((_el, i) => i !== index);
    setCasts(temp);
  };
  const handleClose = () => {
    setNewMovie({
      title: "",
      synopsis: "",
      trailerUrl: "",
      rating: 0,
      imgUrl: "",
    });
    setCasts([]);
    setNewGenre([]);
    setOff();
    setTheMovie({});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(theMovie).length > 0)
      dispatch(
        updateTheMovie({ ...newMovie, cast, genre: newGenre }, theMovie.id)
      );
    else dispatch(createNewMovie({ ...newMovie, cast, genre: newGenre }));
    setOff();
    handleClose();
  };
  return (
    <MuiModal
      open={open}
      onClose={setOff}
      className="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 overflow-y-auto"
    >
      <div
        role="alert"
        className=" container mx-auto w-11/12 md:w-2/3 max-w-[50rem]"
      >
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            Create New Movie
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="mb-3 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Tenggelamnya kapal vander wick"
              value={newMovie.title}
              onChange={handleChange}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Synopsis
            </label>
            <textarea
              type="text"
              name="synopsis"
              className="mb-3 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="write something..."
              value={newMovie.synopsis}
              onChange={handleChange}
            ></textarea>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="89"
              value={newMovie.rating}
              onChange={handleChange}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Genre
            </label>
            <div className="h-24 overflow-y-auto my-3">
              <fieldset className="mb-1">
                {genre?.map((el) => (
                  <div className="flex items-center mb-4" key={el.id}>
                    <input
                      type="checkbox"
                      name={"genre"}
                      className="h-4 w-4 border-gray-300 focus:ring-1 focus:ring-indigo-700 ring-rounde-full"
                      value={el.id}
                      // checked={newGenre.includes(el.id)}
                      onChange={handleCahageGenre}
                    />
                    <label className="text-sm font-medium text-gray-900 ml-2 block">
                      {el.name}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
            <label className=" text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Triler
            </label>
            <input
              type="text"
              name="trailerUrl"
              className="mb-3 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="https://www.youtube.com/watch?v=UmbcqVWPhJ0"
              value={newMovie.trailerUrl}
              onChange={handleChange}
            />
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Movie Poster
            </label>
            <div className="flex">
              <input
                type="text"
                name="imgUrl"
                className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="https://en.wikipedia.org/Harry_Potter_character_poster.jpg"
                value={newMovie.imgUrl}
                onChange={handleChange}
              />
            </div>
            <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Casts
            </label>
            {cast?.map((el, i) => (
              <div className="flex" key={i + "i"}>
                <input
                  name={"name-" + i}
                  value={el?.name}
                  onChange={handleCahageCast}
                  type="text"
                  className="mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Additional Cast name"
                />
                <input
                  name={"profilePict-" + i}
                  value={el?.profilePict}
                  onChange={handleCahageCast}
                  type="text"
                  className="ml-2 mb-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Additional Cast image URL"
                />
                <button className="ml-5" onClick={() => handleRemove(i)}>
                  <i className="fas fa-arrow-up text-red mr-4">remove</i>
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-3">
              <div>
                <button
                  onClick={addCast}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150 ease-in-out hover:bg-emerald-500 bg-emerald-500 rounded text-white px-8 py-2 text-sm"
                >
                  More Cast
                </button>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red transition duration-150 ease-in-out hover:bg-rose-700 bg-red rounded text-white px-8 py-2 text-sm"
                >
                  Submit
                </button>
                <button
                  onClick={handleClose}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
          <div
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            aria-label="close modal"
            role="button"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </MuiModal>
  );
}
