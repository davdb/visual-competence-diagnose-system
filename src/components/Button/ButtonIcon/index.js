import styled from "styled-components";

const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: none;
  &.active {
    background-color: black;
  }
  &.active svg {
    stroke: white;
  }

  ${(props) =>
    props.small &&
    `
       width: 35px;
      height: 35px;
      transform: translate(-25%, 25%);
    `}

  ${(props) =>
    props.withText &&
    `
       border-radius: 0px;

    `}
`;

export default ButtonIcon;
