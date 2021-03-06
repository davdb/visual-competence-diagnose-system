import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const StyledChildrenWrapper = styled.div`
  margin: 30px 20px;
  border-radius: 30px;
  padding: 0 50px;
  background-color: white;
`;

const DashboardTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
  </StyledWrapper>
);

export default DashboardTemplate;
