import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";

const HomeTemplate = ({ children }) => (
  <>
    <HomeNavbar />
    {children}
  </>
);

export default HomeTemplate;
