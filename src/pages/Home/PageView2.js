import React from "react";
import HomeTemplate from "../../templates/HomeTemplate";
import HeroImage from "../../components/HeroImage/HeroImage";
import { theme } from "../../theme/CoreTheme";

const PageView2 = () => (
  <HomeTemplate>
    <HeroImage color={theme.palette.darkSaturn} slide="center" />
  </HomeTemplate>
);
export default PageView2;
