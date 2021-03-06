import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeTemplate from "../../templates/HomeTemplate";
import { NavLink } from "react-router-dom";
import { IconArrowNarrowRight } from "@tabler/icons";
import Button from "../../components/Button";

const Home = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <HomeTemplate>
      <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            System wspomagający diagnozę kompetencji wizualnych
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Zaloguj się do aplikacji, jeżeli nie posiadasz jeszcze konta w
            systemie przejdź do panelu rejestracji
          </p>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <Button as={NavLink} to="/sign-in">
              <span>Zaloguj się</span>
              <IconArrowNarrowRight color="black" stroke={2} />
            </Button>
            <Button as={NavLink} to="/sign-up">
              <span>Rejestracja</span>
              <IconArrowNarrowRight color="black" stroke={2} />
            </Button>
          </div>
        </div>

        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden pt-24">
          <img
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src="/img/svg/home.svg"
          />
        </div>

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">
            &copy; Dawid Biernat 2021
          </a>
        </div>
      </div>
    </HomeTemplate>
  );
};
export default Home;
