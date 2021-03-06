import React, { useState } from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: inline-block;
  list-style: none;
  padding: 0.5rem 0.75rem;
  ${(props) =>
    props.active === true &&
    `
        background-color: white;
        border-bottom: 3px solid #6d64ff;

    `}
`;

const Tab = ({ label, onClick, activeTab }) => {
  //const [active, setActive] = useState(activeTab === label ? true : false);
  const handleNewActiveTab = () => {
    onClick(label);
  };

  return (
    <StyledListItem
      active={activeTab === label ? true : false}
      onClick={handleNewActiveTab}
    >
      {label}
    </StyledListItem>
  );
};

export default Tab;
