import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <Sidebar />
      <Outlet search={search} />
    </>
  );
}
