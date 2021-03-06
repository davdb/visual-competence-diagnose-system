import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink, Link, Redirect } from "react-router-dom";
import ButtonIcon from "../../components/Button/ButtonIcon";
import {
  IconHome,
  IconLogout,
  IconUsers,
  IconCertificate,
  IconNotification,
} from "@tabler/icons";
import { logout } from "../../actions/auth";

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  border-right: 2px solid #eff2fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 150px;
  height: 40px;
  background-image: url("/img/svg/logo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { permissions } = useSelector((state) => state.auth.user);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()).then(() => {
      window.location.reload();
    });
  };

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <StyledWrapper>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/dashboard" activeclass="active">
            <IconHome
              size={36}
              color="black"
              stroke={2}
              strokeLinejoin="miter"
            />
          </ButtonIcon>
        </li>
        {permissions === "ROLE_ADMIN" && (
          <li>
            <ButtonIcon as={NavLink} to="/users" activeclass="active">
              <IconUsers
                size={36}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
          </li>
        )}

        {permissions != "ROLE_USER" && (
          <li>
            <ButtonIcon as={NavLink} to="/test/cases" activeclass="active">
              <IconNotification
                size={36}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
          </li>
        )}
        <li>
          <ButtonIcon as={NavLink} to="/tests" activeclass="active">
            <IconCertificate
              size={36}
              color="black"
              stroke={2}
              strokeLinejoin="miter"
            />
          </ButtonIcon>
        </li>
      </StyledLinksList>
      <ButtonIcon onClick={handleLogout}>
        <IconLogout size={36} color="black" stroke={2} strokeLinejoin="miter" />
      </ButtonIcon>
    </StyledWrapper>
  );
};

export default Sidebar;
