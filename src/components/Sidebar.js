import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out!", "has been log out", "success");
        localStorage.clear();
        navigate("/signin");
      }
    });
  };
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b m-1">
          <div className="text-red text-3xl font-bold">AMFLIX</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <button
                onClick={() => navigate("/")}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-black border-l-4 border-transparent hover:border-red pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Dashboard
                </span>
              </button>
            </li>
            <li>
              <Link to={"/genre"}>
                <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-black border-l-4 border-transparent hover:border-red pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-md tracking-wide truncate">
                    Genre
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red bg-indigo-50 rounded-full">
                    New
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => navigate("/registeradmin")}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-black border-l-4 border-transparent hover:border-red pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4"></span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="ml-2 text-md tracking-wide truncate">
                  Register Admin
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-800 hover:text-black border-l-4 border-transparent hover:border-red pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
