import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signin() {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = { ...account };
    temp[name] = value;
    setAccount(temp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://clean-gold-bracelet.cyclic.app//signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(account),
        }
      );
      let data = await response.json();
      if (data.err) throw data.message;
      localStorage.setItem("access_token", data.accessToken);
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign in success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center h-screen">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-left text-4xl font-bold text-red font-mono">
              AMFLIX
            </h1>
            <h1 className="text-left text-2xl font-semibold font-sans">
              Admin Panel
            </h1>
          </div>
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker"
              name="email"
              type="text"
              placeholder="aldo@gmail.com"
              value={account.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker mb-3"
              name="password"
              type="password"
              placeholder="******************"
              value={account.password}
              onChange={handleChange}
            />
            <label className="flex items-center w-1/2">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-1 bg-white shadow"
              />
              <span className="text-sm text-gray-700 pt-1">Show Password</span>
            </label>
          </div>
          <div className="flex flex-col justify-items-start">
            <button
              type="Submit"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker mb-3 bg-red hover:bg-rose-700 font-bold text-stone-50"
            >
              Sign In
            </button>
            <button>
              <p className="font-bold text-sm text-blue-500">
                Forgot Password?
              </p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signin;
