import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: black;
  font-size: 2.4rem;
`;

const Heading = ({ text }) => <StyledH1>{text}</StyledH1>;

export default Heading;
