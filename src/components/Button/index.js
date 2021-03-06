import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  text-decoration: none;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
  &:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    display: block;
    border-radius: 28px;
    background: #6d64ff;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  & span {
    position: relative;
    color: #403e57;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  & svg {
    position: relative;
    top: 6px;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: black;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: #e6e6e6;
    }
    & svg {
      transform: translateX(0);
    }
  }
  &:active {
    transform: scale(0.96);
  }
`;

export default Button;
