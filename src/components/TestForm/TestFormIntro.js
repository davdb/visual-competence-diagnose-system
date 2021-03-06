import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { IconArrowNarrowRight } from "@tabler/icons";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 10px 20px;
`;

const StyledButton = styled(Button)`
  margin: 0;
  border: 0;
  background: transparent;
`;

const StyledIntroPicture = styled.div`
  background-image: url("/img/svg/test_intro.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  width: 100%;
`;

const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`;

const StyledHeader = styled.h1`
  margin: 25px 0;
`;

const TestFormIntro = ({ handleStart }) => {
  return (
    <StyledContainer>
      <StyledIntroPicture />
      <StyledHeader>
        Test wspomagajacy diagnozę kompetencji wizualnych
      </StyledHeader>
      <StyledInfoBox>
        <p>
          Test składa się z trzech rodzajów pytań diagnozujących poziom rozwoju
          trzech kompetencji wizualnych: percepcji, kreowania oraz odbioru.
        </p>
      </StyledInfoBox>
      <small>Uzyj przycisku rozpocznij, aby przejsc do testu</small>
      <StyledButton onClick={handleStart}>
        <span>Rozpocznij</span>
        <IconArrowNarrowRight color="black" stroke={2} />
      </StyledButton>
    </StyledContainer>
  );
};

export default TestFormIntro;
