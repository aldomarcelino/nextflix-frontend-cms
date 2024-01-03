import { useState } from "react";
import GenreModal from "../components/GenreModal";
import Table from "../components/Table";
import { useToggle } from "../hooks/useToggle";

export default function Genre() {
  const [genre, setGenre] = useState({});
  const { open, setOn, setOff } = useToggle();
  const [modalType, setModalType] = useState("add");
  const handleEdit = (data) => {
    setModalType("edit");
    setOn();
    setGenre(data);
  };
  const handleAdd = () => {
    setModalType("add");
    setOn();
  };

  return (
    <>
      <GenreModal
        open={open}
        setOff={setOff}
        type={modalType}
        theGenre={genre}
      />
      <div className="w-full xl:w-8/12  px-4 mx-auto ml-96 mt-4 mb-20">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Genre List
                </h3>
              </div>
              <div className="px-4">
                <button
                  onClick={handleAdd}
                  className="flex items-center h-10 bg-red text-white active:bg-rose-900 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Create Genre
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <Table
              handleEdit={handleEdit}
              status={"genre"}
              head={["no", "name", "createdat", "updatedat", "ACTIONS"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
