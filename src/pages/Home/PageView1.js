import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import HeroImage from "../../components/HeroImage/HeroImage";
import { theme } from "../../theme/CoreTheme";

const PageView1 = () => (
  <HomeTemplate>
    <HeroImage color={theme.palette.darkNeptun} slide="center" />
  </HomeTemplate>
);
export default PageView1;
