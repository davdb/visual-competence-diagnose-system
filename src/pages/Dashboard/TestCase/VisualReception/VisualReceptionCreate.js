import React, { Component } from "react";
import styled from "styled-components";
import { IconX } from "@tabler/icons";
import DashboardTemplate from "../../../../templates/DashboardTemplate";
import ButtonIcon from "../../../../components/Button/ButtonIcon";
import VisualReceptionForm from "../../../../components/VisualReceptionForm";

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
class VisualReceptionCreate extends Component {
  componentDidMount() {}
  render() {
    const handleClose = (e) => {
      this.props.history.push("/test/cases");
    };

    return (
      <DashboardTemplate>
        <StyledTitleContainer>
          <ButtonIcon onClick={handleClose}>
            <IconX size={36} color="black" stroke={2} strokeLinejoin="miter" />
          </ButtonIcon>
          <h1> Odbiór wizualny / Utwórz zadanie</h1>
        </StyledTitleContainer>
        <StyledContainer>
          <VisualReceptionForm />
        </StyledContainer>
      </DashboardTemplate>
    );
  }
}

export default VisualReceptionCreate;
