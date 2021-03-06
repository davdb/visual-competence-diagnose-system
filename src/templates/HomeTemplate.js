import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";

const HomeTemplate = ({ children }) => (
  <div
    className="h-screen pb-14 bg-right bg-cover"
    style={{ backgroundImage: "url('/img/svg/bg.svg')" }}
  >
    <HomeNavbar />
    {children}
  </div>
);

export default HomeTemplate;
