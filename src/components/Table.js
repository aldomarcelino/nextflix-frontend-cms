import { useEffect, useState } from "react";
import RowsMovie from "./RowsMovie";
import RowsGenre from "./RowsGenre";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchGenre } from "../store/actions/movies";
import { useLocation } from "react-router-dom";

export default function Table(props) {
  const location = useLocation();
  const { status, head, handleEdit, handleShowCast, handleEditMovie } = props;
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { genre } = useSelector((state) => {
    return state.genre;
  });
  let tBody;
  const [search, setSearch] = useState(location.search.split("=")[1]);

  useEffect(() => {
    setSearch(location.search.split("=")[1]);
  }, [location]);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenre());
  }, []);

  const tHead = head.map((e, i) => (
    <th
      key={i + "x"}
      className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
    >
      {e}
    </th>
  ));

  if (status === "dashboard") {
    tBody = movies
      .filter((item) =>
        !search ? item : item.title.toLowerCase().includes(search)
      )
      .map((e, i) => (
        <RowsMovie
          key={e.id}
          movie={e}
          no={i}
          handleShowCast={handleShowCast}
          handleEditMovie={handleEditMovie}
        />
      ));
  } else {
    tBody = genre
      .filter((item) =>
        !search ? item : item.name.toLowerCase().includes(search)
      )
      .map((e, i) => (
        <RowsGenre key={e.id} genre={e} no={i} handleEdit={handleEdit} />
      ));
  }
  return (
    <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>{tHead}</tr>
      </thead>
      <tbody className="font-medium">{tBody}</tbody>
    </table>
  );
}
