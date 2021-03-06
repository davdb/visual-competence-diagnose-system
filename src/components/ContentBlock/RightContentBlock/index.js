import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-reveal";
import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import styled from "styled-components";

const StyledRightBlockContainer = styled.section`
  position: relative;
  padding: ${(props) =>
    props.last ? "8rem 0 10rem" : props.first ? "10rem 0 8rem" : "8rem 0 8rem"};
  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.last ? "5rem 0 6rem" : "8rem 0 6rem")};
  }
`;

const StyledTitle = styled.h6``;

const StyledContent = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

const StyledContentWrapper = styled.div`
  position: relative;
  max-width: 540px;
  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;

const RightBlock = ({ last, first, title, content, button, icon }) => {
  return (
    <StyledRightBlockContainer last={last} first={first}>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <StyledContentWrapper>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
              <StyledButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button key={id} color={item.color} width="true">
                        {item.title}
                      </Button>
                    );
                  })}
              </StyledButtonWrapper>
            </StyledContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
      </Row>
    </StyledRightBlockContainer>
  );
};

export default RightBlock;
