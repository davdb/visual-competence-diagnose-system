import React from "react";
import { Row, Col } from "antd";
import { Fade } from "react-reveal";

import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  background: rgb(249, 250, 252);
  padding: 2.5rem 0;
`;

const StyledTitle = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

const StyledNavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
  &.active {
    color: rgb(255, 130, 92);
  }
`;

const StyledCSite = styled.p`
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  font-size: 14px;
  color: rgba(15, 33, 55, 0.6);
  text-align: inherit;
`;

const StyledTarget = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

const StyledExtra = styled.section`
  background: rgb(249, 250, 252);
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledSelect = styled.div`
  line-height: 24px;
  @media only screen and (min-width: 1024px) {
    padding: 0 10%;
  }
`;

const StyledPara = styled.div`
  color: rgba(2, 7, 62, 0.8);
  max-width: 340px;
  font-size: 14px;
  width: 100%;
`;

const StyledFooterContainer = styled.div`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-right: 50%;
  }
  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;
    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Fade bottom>
        <StyledFooter>
          <StyledExtra>
            <Container border="true">
              <Row
                type="flex"
                justify="space-between"
                align="middle"
                style={{ paddingTop: "3rem" }}
              >
                <StyledNavLink to="/">
                  <StyledLogoContainer>
                    <SvgIcon src="logo.svg" />
                  </StyledLogoContainer>
                </StyledNavLink>
                <StyledFooterContainer>
                  <a
                    href="https://github.com/Adrinlol/create-react-app-adrinlol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src="github.svg" />
                  </a>
                  <a
                    href="https://twitter.com/Adrinlolx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src="twitter.svg" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lasha-kakabadze//"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src="linkedin.svg" />
                  </a>
                  <a
                    href="https://github.com/Adrinlol/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src="instagram.svg" />
                  </a>
                  <a
                    href="https://medium.com/@lashakakabadze/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src="medium.svg" />
                  </a>
                </StyledFooterContainer>
              </Row>
              <Row type="flex" justify="space-between">
                <Col lg={12} md={12} sm={12} xs={24}>
                  <StyledCSite>
                    All Rights Reserved - Landy © {new Date().getFullYear()}
                  </StyledCSite>
                </Col>
              </Row>
            </Container>
          </StyledExtra>
        </StyledFooter>
      </Fade>
    </>
  );
};

export default Footer;
