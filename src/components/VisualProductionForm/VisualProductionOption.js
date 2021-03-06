import React, { useState } from "react";
import styled from "styled-components";

const StyledOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledNameWrapper = styled.div`
  width: 40%;
`;

const StyledInputWrapper = styled.div`
  width: 60%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #e6e6e6;
`;

const StyledTitle = styled.p`
  font-weight: bold;
`;

const VisualProductionOption = ({
  name,
  required,
  index,
  value,
  onChangeOptionsValue,
  readOnly,
}) => {
  return (
    <StyledOptionWrapper>
      <StyledNameWrapper>
        <StyledTitle>{name}</StyledTitle>
      </StyledNameWrapper>
      <StyledInputWrapper>
        <StyledInput
          type="number"
          min="0"
          max="10"
          required
          defaultValue={value}
          data-index={index}
          onChange={onChangeOptionsValue}
          placeholder={name}
          readOnly={readOnly ? true : false}
        />
      </StyledInputWrapper>
    </StyledOptionWrapper>
  );
};

export default VisualProductionOption;
