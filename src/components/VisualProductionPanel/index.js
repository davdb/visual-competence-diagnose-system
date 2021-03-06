import React, { useState } from "react";
import styled from "styled-components";
import Palette from "../Palette";
import Canvas from "../Canvas";
import Inspector from "../Inspector";
import "./panel.css";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 550px;
`;

const VisualProductionPanel = ({ images, handleProductionContent }) => {
  return (
    <StyledContainer>
      <Palette images={images} />
      <Canvas handleProductionContent={handleProductionContent} />
      <Inspector />
    </StyledContainer>
  );
};

export default VisualProductionPanel;
