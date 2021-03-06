import React from "react";
import { Row, Col } from "antd";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Button from "../../../common/Button";

export const StyledMiddleBlock = styled.section`
  position: relative;
  padding: 5.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled.h6``;

export const StyledContent = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const StyledContentWrapper = styled.div`
  max-width: 570px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const MiddleBlock = ({ last, id, title, content, button }) => {
  return (
    <StyledMiddleBlock last={last} id={id}>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <StyledContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent last={last}>{content}</StyledContent>
              {button ? (
                <Button name="submit" type="submit">
                  {button}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </StyledContentWrapper>
        </Fade>
      </Row>
    </StyledMiddleBlock>
  );
};

export default MiddleBlock;
