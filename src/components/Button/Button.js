import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  text-decoration: none;
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

export default Button;
