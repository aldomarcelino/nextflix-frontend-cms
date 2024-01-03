import { useDispatch } from "react-redux";
import { deleteGenre } from "../store/actions/movies";

export default function RowsGenre(props) {
  const { no, genre, handleEdit } = props;
  const { name, createdAt, updatedAt, id } = genre;
  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(deleteGenre(id));
  };

  return (
    <>
      <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
          {no + 1}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
          {name}
        </td>
        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-blue-500 mr-4">{createdAt}</i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-arrow-up text-blue-500 mr-4">{updatedAt}</i>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <button
            onClick={() => handleEdit({ id, name })}
            className="text-indigo-600"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="ml-3 text-red">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
