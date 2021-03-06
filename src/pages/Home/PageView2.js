import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import HeroImage from "../../components/HeroImage/HeroImage";
import { theme } from "../../theme/CoreTheme";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

const PageView2 = () => (
  <HomeTemplate>
    <RegisterForm />
  </HomeTemplate>
);
export default PageView2;
