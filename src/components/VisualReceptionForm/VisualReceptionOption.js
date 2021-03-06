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

const VisualReceptionOption = ({
  name,
  required,
  index,
  onChangeOptionsValue,
  value,
  readOnly,
}) => {
  return (
    <StyledOptionWrapper>
      <StyledNameWrapper>
        <StyledTitle>
          {name} {required ? "*" : ""}
        </StyledTitle>
      </StyledNameWrapper>
      <StyledInputWrapper>
        <StyledInput
          type="text"
          data-index={index}
          onChange={onChangeOptionsValue}
          placeholder={name}
          defaultValue={value}
          readOnly={readOnly ? true : false}
        />
      </StyledInputWrapper>
    </StyledOptionWrapper>
  );
};

export default VisualReceptionOption;
