import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import HomeTemplate from "../../templates/HomeTemplate";
import HeroImage from "../../components/HeroImage/HeroImage";
import LoginForm from "../../components/LoginForm/LoginForm";
import { theme } from "../../theme/CoreTheme";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const PageView1 = () => {
  return (
    <HomeTemplate>
      <LoginForm />
    </HomeTemplate>
  );
};

export default PageView1;
