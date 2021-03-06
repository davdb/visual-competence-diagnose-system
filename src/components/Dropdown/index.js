import React, { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { IconChevronUp, IconChevronDown, IconCheck } from "@tabler/icons";

const StyledWrapper = styled.div`
  position: relative;

  max-width: 350px;
  width: 30%;
  margin: 30px 15px 15px 15px;

  flex-grow: 2;
  height: 44px;
  user-select: none;

  & label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;

    font-size: 13px;
    transform: translateY(-23px) translateX(-5px);
    z-index: 5;
    background: white;
    padding: 0 8px;
  }
`;
const StyledHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid rgb(223, 223, 223);
  background: transparent;
  line-height: 38px;
  width: 100%;
  cursor: default;
  cursor: pointer;

  & span {
    margin-right: 20px;
  }
`;

const StyledHeaderTitle = styled.div`
  margin: 2px 20px;
  margin-right: 30px;
  font-weight: 300;
`;

const StyledList = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  max-height: 215px;
  border: 1px solid rgb(223, 223, 223);
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  font-weight: 700;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  //padding: 15px 0;
`;

const StyledListItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  line-height: 1.6rem;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 20;
`;

const Dropdown = ({ title, label, list, onChangeOptionValue }) => {
  const [isListOpen, setIsListOpen] = React.useState(false);
  const [labelTitle, setLabelTitle] = React.useState(label ? label : "Wartość");
  const [headerTitle, setHeaderTitle] = React.useState(title);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const selectItem = (item) => {
    const { title, value, id } = item;
    onChangeOptionValue(id, value);
    setHeaderTitle(title);
    setIsListOpen(false);
  };

  return (
    <StyledWrapper className="dropdown-wrapper">
      <label>{labelTitle}</label>
      <StyledHeader type="button" onClick={toggleList}>
        <StyledHeaderTitle>{headerTitle}</StyledHeaderTitle>
        {isListOpen ? (
          <IconChevronUp
            size={16}
            color="black"
            stroke={2}
            strokeLinejoin="miter"
          />
        ) : (
          <IconChevronDown
            size={16}
            color="black"
            stroke={2}
            strokeLinejoin="miter"
          />
        )}
      </StyledHeader>
      {isListOpen && (
        <StyledList role="list">
          {list.map((item) => (
            <StyledListItem
              type="button"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.title}{" "}
              {item.selected && (
                <IconCheck
                  size={16}
                  color="black"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              )}
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </StyledWrapper>
  );
};

export default Dropdown;
