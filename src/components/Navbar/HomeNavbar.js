import React from "react";
import styled from "styled-components";

const StyledLogo = styled.a`
  display: block;
  width: 150px;
  height: 40px;
  background-image: url("/img/svg/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  margin-top: 5px;
`;

const HomeNavbar = () => (
  <div className="w-full container mx-auto p-6">
    <div className="w-full flex items-center justify-between">
      <StyledLogo
        className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="/"
      ></StyledLogo>

      <div className="flex w-1/2 justify-end content-center">
        <a
          className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
          data-tippy-content="#facebook_id"
          href="https://www.facebook.com/davdbiernat"
        >
          <svg
            className="fill-current h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default HomeNavbar;
