import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DashboardTemplate from "../../../../templates/DashboardTemplate";
import { fetchVisualPerceptionTask } from "../../../../services/visualperception.service";
import ButtonIcon from "../../../../components/Button/ButtonIcon";
import { IconX } from "@tabler/icons";

const StyledContainer = styled.div`
  padding: 10px 20px;
  border: 2px solid #e6e6e6;
  border-radius: 20px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 10px;
  & > h1 {
    margin-left: 10px;
  }

  & > button {
    margin-top: 10px;
  }
`;

const StyledTitle = styled.p`
  font-size: 18px;
`;

const StyledDescription = styled.p`
  color: gray;
`;

const StyledImage = styled.div`
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
`;

const StyledOptionWrapper = styled.div`
  border: 2px solid #e6e6e6;
  margin: 10px 0;
  padding: 10px;

  &[data-tag="true"] {
    background-color: #e6e6e6;
  }
`;

const StyledLabel = styled.label``;

const StyledCheckbox = styled.input`
  &[type="checkbox"]:not(:checked),
  &[type="checkbox"]:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  &[type="checkbox"]:not(:checked) + label,
  &[type="checkbox"]:checked + label {
    position: relative;
    padding-left: 2.3em;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
  }

  /* checkbox aspect */
  &[type="checkbox"]:not(:checked) + label:before,
  &[type="checkbox"]:checked + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 rgba(203, 34, 237, 0.2);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  /* checked mark aspect */
  &[type="checkbox"]:not(:checked) + label:after,
  &[type="checkbox"]:checked + label:after {
    content: "✕";
    position: absolute;
    top: 0.6em;
    left: 0.15em;
    font-size: 1.375em;
    color: #6d64ff;
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  /* checked mark aspect changes */
  &[type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  &[type="checkbox"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
`;

const VisualPerceptionDetails = (props) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisualPerceptionTask(props.match.params.id).then((response) =>
      setTask(JSON.parse(response.data))
    );
  }, []);

  const handleClose = () => {
    props.history.push("/test/cases");
  };

  return (
    <DashboardTemplate>
      <StyledTitleContainer>
        <ButtonIcon onClick={handleClose}>
          <IconX size={36} color="black" stroke={2} strokeLinejoin="miter" />
        </ButtonIcon>
        <h1> Percepcja wizualna / Szczegóły zadania</h1>
      </StyledTitleContainer>
      <StyledContainer>
        {task && (
          <>
            <StyledImage image={task.image}></StyledImage>
            <StyledTitle> {task.name} </StyledTitle>
            <StyledDescription></StyledDescription>
            <form key={task}>
              {task.options.map((option) => (
                <StyledOptionWrapper key={option.id} data-tag={false}>
                  <StyledCheckbox
                    type="checkbox"
                    name="answers"
                    checked={option.checked ? true : false}
                    readOnly
                    value={option.id}
                  />
                  <StyledLabel>{option.name}</StyledLabel>
                </StyledOptionWrapper>
              ))}
            </form>
          </>
        )}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default VisualPerceptionDetails;
