import React, { useState } from "react";
import styled from "styled-components";
import Tab from "../Tab";

const StyledContainer = styled.div``;
const StyledList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`;
const StyledContent = styled.div``;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledContainer>
      <StyledList>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </StyledList>
      <StyledContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </StyledContent>
    </StyledContainer>
  );
};

export default Tabs;
