import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  transform: translate(10%, 40px);
`;

const StyledLogoWrapper = styled.div``;
const StyledListWrapper = styled.div``;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  padding: 10px;
`;

const StyledLink = styled.button`
  color: black;
  padding: 10px;
  border-radius: 20px;
  border: none;
  text-decoration: none;
  &.active {
    background-color: black;
    color: white;
  }
`;

const HomeNavbar = () => (
  <StyledNav>
    <StyledLogoWrapper></StyledLogoWrapper>
    <StyledListWrapper>
      <StyledList>
        <StyledListItem>
          <StyledLink as={NavLink} to="/" activeclass="active">
            Główna
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink as={NavLink} to="/page-view-1" activeclass="active">
            Test osobowy
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink as={NavLink} to="/page-view-2" activeclass="active">
            Test grupowy
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink as={NavLink} to="/contact" activeclass="active">
            Kontakt
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledListWrapper>
  </StyledNav>
);

export default HomeNavbar;
