import React from "react";
import styled from "styled-components";
import Textarea from "../Textarea";
import VisualProductionPanel from "../VisualProductionPanel";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
`;

const StyledTestContainer = styled.div`
  border-radius: 20px;
  width: 100%;
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
  height: 300px;
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

const TaskFormTask = ({
  task,
  handleAnswerChange,
  handleReceptionContent,
  handleProductionContent,
}) => {
  const handleOptionClick = (e) => {
    const element = e.target.querySelector("input");
    element.checked = !element.checked;
    e.target.dataset.tag = !eval(e.target.dataset.tag);
    handleAnswerChange(element.value, element.checked, element.dataset.value);
  };

  const handleLabelClick = (e) => {
    e.stopPropagation();
    const element = e.target.parentElement.querySelector("input");
    element.checked = !element.checked;
    e.target.parentElement.dataset.tag = !eval(
      e.target.parentElement.dataset.tag
    );

    handleAnswerChange(element.value, element.checked, element.dataset.value);
  };

  return (
    <StyledContainer>
      <StyledTestContainer>
        {task.type === "perception" && (
          <>
            <StyledImage image={task.image}></StyledImage>
            <StyledTitle>
              Wskaz znaczenie przedstawianego powyzej elementu graficznego
            </StyledTitle>
            <StyledDescription></StyledDescription>
            <form key={task}>
              {task.options.map((option) => (
                <StyledOptionWrapper
                  key={option.id}
                  onClick={handleOptionClick}
                  data-tag={false}
                >
                  <StyledCheckbox
                    type="checkbox"
                    name="answers"
                    value={option.id}
                    data-value={option.value}
                  />
                  <StyledLabel onClick={handleLabelClick}>
                    {option.content}
                  </StyledLabel>
                </StyledOptionWrapper>
              ))}
            </form>
          </>
        )}

        {task.type === "production" && (
          <>
            <StyledTitle>
              Zaprojektuj element graficzny dla - {task.content}
            </StyledTitle>
            <VisualProductionPanel
              handleProductionContent={handleProductionContent}
              images={task.options}
            />
          </>
        )}

        {task.type === "reception" && (
          <>
            <StyledImage image={task.image}></StyledImage>
            <StyledTitle> {task.content} </StyledTitle>
            <StyledDescription></StyledDescription>
            <Textarea
              label="Znaczenie semantyczne"
              onChange={handleReceptionContent}
            />
          </>
        )}
      </StyledTestContainer>
    </StyledContainer>
  );
};

export default TaskFormTask;
