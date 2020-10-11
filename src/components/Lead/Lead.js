import React from "react";
import styled from "styled-components";

const StyledLead = styled.p`
  font-size: 1.4rem;
`;

const Lead = ({ text }) => <StyledLead>{text}</StyledLead>;

export default Lead;
