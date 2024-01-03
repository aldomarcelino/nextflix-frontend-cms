import { useDispatch } from "react-redux";
import { deleteTheMovie } from "../store/actions/movies";

export default function RowsMovie(props) {
  const { no, handleShowCast, movie, handleEditMovie } = props;
  const { title, rating, imgUrl, id, MovieCasts, User, GenreMovies } = movie;
  let imageUrl;
  let dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTheMovie(id));
  };
  if (imgUrl[0] === "/") imageUrl = `https://image.tmdb.org/t/p/w500/${imgUrl}`;
  else imageUrl = imgUrl;

  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {title}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {GenreMovies?.map((el) => (
          <p key={el.id}>{el.Genre.name}</p>
        ))}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-emerald-500 mr-4">{rating / 10}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-blue-500 mr-4">{User.email}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="items-center w-40 rounded">
          <img src={imageUrl} alt={title} />
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button
          onClick={() => handleShowCast({ MovieCasts, title })}
          className="bg-emerald-500 h-8 w-24 rounded text-yellow-50 font-bold"
        >
          Show Casts
        </button>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button
          onClick={() => handleEditMovie(movie)}
          className="text-blue-600"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="text-red ml-2">
          Delete
        </button>
      </td>
    </tr>
  );
}
