import React from "react";
import SvgIcon from "../../../common/SvgIcon";
import styled from "styled-components";
import { Row, Col } from "antd";
import { Slide } from "react-reveal";

const StyledLeftContentBlock = styled.section`
  position: relative;
  padding: 8rem 0 8rem;
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
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

const StyledServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

const StyledMinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

const StyledMinPara = styled.p`
  font-size: 0.75rem;
`;

const StyledServiceItem = styled(Col)`
  margin: 2rem 0;
  position: relative;
`;

const LeftContentBlock = ({ icon, title, content, section }) => {
  return (
    <StyledLeftContentBlock>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon src={icon} className="about-block-image" />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <StyledContentWrapper>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
              <StyledServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} lg={12} md={12} sm={12} xs={12}>
                          <SvgIcon src={item.icon} />
                          <StyledMinTitle>{item.title}</StyledMinTitle>
                          <StyledMinPara>{item.content}</StyledMinPara>
                        </Col>
                      );
                    })}
                </Row>
              </StyledServiceWrapper>
            </StyledContentWrapper>
          </Slide>
        </Col>
      </Row>
    </StyledLeftContentBlock>
  );
};

export default LeftContentBlock;
