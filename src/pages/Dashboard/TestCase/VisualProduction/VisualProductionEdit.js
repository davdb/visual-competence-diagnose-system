import React, { useState, useEffect } from "react";
import DashboardTemplate from "../../../../templates/DashboardTemplate";
import ButtonIcon from "../../../../components/Button/ButtonIcon";
import styled from "styled-components";
import { IconX } from "@tabler/icons";
import { fetchVisualProductionTask } from "../../../../services/visualproduction.service";
import VisualProductionForm from "../../../../components/VisualProductionForm";

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

const VisualProductionEdit = (props) => {
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
        <h1> Produkcja wizualna / Edytuj zadanie</h1>
      </StyledTitleContainer>
      <StyledContainer>
        {task && <VisualProductionForm task={task} type="edit" />}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default VisualProductionEdit;
