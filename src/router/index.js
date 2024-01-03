import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Signin from "../components/Signin";
import Dashboard from "../pages/Dashboard";
import Genre from "../pages/Genre";
import RegisterAdmin from "../pages/RegisterAdmin";

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) throw redirect("/signin");
    },
    children: [
      {
        element: <Dashboard />,
        path: "/",
      },
      {
        element: <Genre />,
        path: "/genre",
      },
      {
        element: <RegisterAdmin />,
        path: "/registeradmin",
      },
    ],
  },
  {
    element: <Signin />,
    path: "/signin",
    loader: () => {
      if (localStorage.getItem("access_token")) throw redirect("/");
    },
  },
]);

export default router;
