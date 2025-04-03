import Navbar from "./Navbar";
import { Outlet } from "react-router";
const Layout = ({ token }) => {
  return (
    <>
      <Navbar token={token}></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
