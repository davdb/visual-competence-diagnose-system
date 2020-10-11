import React from "react";
import styled, { css } from "styled-components";

const StyledShapeDivider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-color: ${({ color }) => (color ? color : "#fff")};
  ${({ wave }) =>
    wave &&
    css`
      clip-path: circle(63.4% at 0 48%);
    `}
  animation: ${({ slide }) =>
    slide == "right"
      ? "slide-right 1.5s cubic-bezier(0.23, 1, 0.32, 1) both"
      : "fade-in-bck 0.6s ease-out both"};
`;

const HeroImage = ({ color, wave, slide }) => (
  <StyledShapeDivider
    color={color}
    wave={wave}
    slide={slide}
  ></StyledShapeDivider>
);

export default HeroImage;
