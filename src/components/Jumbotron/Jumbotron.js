import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Heading from "../Heading/Heading";
import Lead from "../Lead/Lead";
import Button from "../Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
`;

const StyledImageWrapper = styled.div``;

const StyledJumbotronWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-content: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Jumbotron = () => (
  <StyledWrapper>
    <StyledImageWrapper></StyledImageWrapper>
    <StyledJumbotronWrapper>
      <Heading text="System wspierający diagnozę kompetencji wizualnych" />
      <Lead text="Diagnoza opiera się na 3 zadaniach realizowanych przez badanego, następnie...  " />
      <StyledButtonWrapper>
        <Button
          as={NavLink}
          to="/page-view-1"
          activeclass="active"
          text="Test -> "
        />
        <Button as={NavLink} to="/page-view-2" text="Test grupowy ->" />
      </StyledButtonWrapper>
    </StyledJumbotronWrapper>
  </StyledWrapper>
);

export default Jumbotron;
