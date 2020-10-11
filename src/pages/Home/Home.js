import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import HomeTemplate from "../../templates/HomeTemplate";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { theme } from "../../theme/CoreTheme";

const Home = () => (
  <HomeTemplate>
    <HeroImage color={theme.palette.darkSaturn} wave="true" slide="right" />
    <Jumbotron />
  </HomeTemplate>
);
export default Home;
