import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DashboardTemplate from "../../../../templates/DashboardTemplate";
import { fetchVisualProductionTask } from "../../../../services/visualproduction.service";
import ButtonIcon from "../../../../components/Button/ButtonIcon";
import VisualProductionOption from "../../../../components/VisualProductionForm/VisualProductionOption";
import { IconX } from "@tabler/icons";

const StyledContainer = styled.div`
  padding: 10px 20px;
  border: 2px solid #e6e6e6;
  border-radius: 20px;
`;
const StyledOptionsContainer = styled.div`
  position: relative;
  margin-bottom: 35px;
  border: 1px solid #eee;
  padding: 35px 20px;
  border-radius: 0.25em;
  display: none;
  display: block;
  margin-top: 30px;
`;

const StyledOptionsContainerTitle = styled.span`
  color: #757575;
  position: absolute;
  top: 13px;
  left: 15px;
  transition: all 0.2s ease;
  font-size: 13px;
  transform: translateY(-23px) translateX(-5px);
  z-index: 501;
  background: white;
  padding: 0 8px;
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

const VisualProductionDetails = (props) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisualProductionTask(props.match.params.id).then((response) =>
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
        <h1> Produkcja wizualna / Szczegóły zadania</h1>
      </StyledTitleContainer>
      <StyledContainer>
        {task && (
          <>
            <StyledTitle> {task.name} </StyledTitle>
            <StyledOptionsContainer>
              <StyledOptionsContainerTitle>
                Kształty
              </StyledOptionsContainerTitle>
              {task.options.shapes.map((item, index) => {
                return (
                  <VisualProductionOption
                    name={item.name}
                    index={index}
                    value={item.value}
                    key={item.id}
                    readOnly
                  />
                );
              })}
            </StyledOptionsContainer>
            <StyledOptionsContainer>
              <StyledOptionsContainerTitle>Kolory</StyledOptionsContainerTitle>
              {task.options.colors.map((item, index) => {
                return (
                  <VisualProductionOption
                    name={item.name}
                    index={index}
                    value={item.value}
                    key={item.id}
                    readOnly
                  />
                );
              })}
            </StyledOptionsContainer>
          </>
        )}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default VisualProductionDetails;
