import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";


export default function ProctectedRoutes() {
  return (
    <>
      <Header />

      <Sidebar />

      <main className="md:pl-52 p-5 dark pt-24 mx-auto  container">

        <Outlet />

      </main>
    </>
  )
}
