import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { createTest } from "../../actions/test";
import TestFormIntro from "./TestFormIntro";
import TestFormTask from "./TestFormTask";

const StyledContainer = styled.div`
  //height: 90vh;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 15px;
  background: #6d64ff;
  color: white;
  border-left: 2px solid #e6e6e6;
  border-top: 2px solid #e6e6e6;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0 0 20px 0;
  z-index: 999;
`;

const StyledTestCaseContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  height: 85vh;
`;

const StyledTestCaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TestForm = ({ tasks }) => {
  const [results, setResults] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const result = useSelector((state) => state.test.result);
  const dispatch = useDispatch();

  const handleStart = () => {
    setStarted(true);
    if (tasks.length === 0) {
      setFinished(true);
    } else {
      var generatedResults = [];
      tasks.map((item) =>
        generatedResults.push({ task: item.id, answers: [], type: item.type })
      );
      setResults(generatedResults);
      setCurrentTaskId(tasks[0].id);
    }
  };

  const handleFinish = () => {
    setFinished(true);
    dispatch(createTest(results))
      .then(() => {})
      .catch(() => {});
  };

  const handleAnswerChange = (id, checked, value) => {
    var currentAnswer = results
      .filter((answer) => answer.task === currentTaskId)
      .shift();

    if (checked) {
      currentAnswer.answers.push({ id: id, value: value });
    } else {
      currentAnswer.answers = currentAnswer.answers.filter(
        (answer) => answer.id != id
      );
    }
  };

  const handleReceptionContent = (value) => {
    var currentAnswer = results
      .filter((answer) => answer.task === currentTaskId)
      .shift();
    currentAnswer.answers = value;
  };

  const handleNextTask = () => {
    var currentAnswer = results
      .filter((answer) => answer.task === currentTaskId)
      .shift();

    if (currentAnswer.type === "production") {
      var buttonShapes = document.getElementById("button-handle-shapes");
      var buttonReset = document.getElementById("button-handle-shapes-reset");
      buttonShapes.click();
      buttonReset.click();
    }

    console.log(results);

    const newTaskIndex = currentTaskIndex + 1;
    if (newTaskIndex < tasks.length) {
      setCurrentTaskIndex(newTaskIndex);
      setCurrentTaskId(tasks[newTaskIndex].id);
    } else {
      handleFinish();
    }
  };

  const handleProductionContent = (image, shapes) => {
    var currentAnswer = results
      .filter((answer) => answer.task === currentTaskId)
      .shift();

    currentAnswer.answers = { image: image, shapes: shapes };
  };

  const handleTimeOver = () => {
    handleNextTask();
  };

  if (result) {
    const redirectUrl = "/test/" + result + "/details";
    return <Redirect to={redirectUrl} />;
  }

  return (
    <>
      {!started && <TestFormIntro handleStart={handleStart} />}
      {started & !finished ? (
        <StyledContainer>
          <StyledTestCaseContainer>
            {tasks[currentTaskIndex].type === "perception" && (
              <CountdownTimer
                time={tasks[currentTaskIndex].time}
                key={currentTaskIndex}
                handleTimeOver={handleTimeOver}
              />
            )}
            <StyledTestCaseWrapper>
              <TestFormTask
                task={tasks[currentTaskIndex]}
                handleAnswerChange={handleAnswerChange}
                handleReceptionContent={handleReceptionContent}
                handleProductionContent={handleProductionContent}
              />
            </StyledTestCaseWrapper>
          </StyledTestCaseContainer>
          <StyledButtonWrapper>
            <StyledButton type="button" onClick={handleNextTask}>
              Kolejne zadanie
            </StyledButton>
          </StyledButtonWrapper>
        </StyledContainer>
      ) : (
        ""
      )}
      {finished && <div> Zakończono test, wynik: {result} </div>}
    </>
  );
};

export default TestForm;
