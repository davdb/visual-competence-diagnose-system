import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "react-validation/build/input";
import MyInput from "../Input";
import Dropdown from "../Dropdown";
import ButtonIcon from "../Button/ButtonIcon";
import { IconTrash } from "@tabler/icons";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  flex-grow: 2;
`;

const VisualPerceptionOption = ({
  name,
  option,
  counter,
  onChangeOptionName,
  onChangeOptionValue,
  handleDeleteOption,
}) => {
  const handleSelectValue = (id, value) => {
    answers.forEach((item) => (item.selected = false));
    answers[id].selected = true;
    onChangeOptionValue(value, counter);
  };

  const answers = [
    {
      id: 0,
      title: "Niepoprawna",
      selected: option
        ? option.value !== "" && option.value === false
          ? true
          : false
        : false,
      value: false,
    },
    {
      id: 1,
      title: "Poprawna",
      selected: option
        ? option.value !== "" && option.value === true
          ? true
          : false
        : false,
      value: true,
    },
  ];

  return (
    <StyledContainer>
      <MyInput
        type="text"
        label="Treść odpowiedzi"
        name={"options[" + counter + "][name]"}
        counter={counter}
        onChange={onChangeOptionName}
        validations={[required]}
        defaultValue={option.name}
      />

      <Dropdown
        title={
          option
            ? option.value !== ""
              ? option.value === true
                ? "Poprawna"
                : "Niepoprawna"
              : "Wybierz wartość"
            : "Wybierz wartość"
        }
        list={answers}
        onChangeOptionValue={handleSelectValue}
      />
      <ButtonIcon
        small
        type="button"
        data-counter={counter}
        onClick={handleDeleteOption}
      >
        <IconTrash size={16} color="black" stroke={2} strokeLinejoin="miter" />
      </ButtonIcon>
    </StyledContainer>
  );
};

export default VisualPerceptionOption;
