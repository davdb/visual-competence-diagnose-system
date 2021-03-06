import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import { fetchTestDetails } from "../../../services/test.service";
import ButtonIcon from "../../../components/Button/ButtonIcon";
import CircleChart from "../../../components/Charts/CircleChart";

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

const StyledOtherBox = styled.div`
  margin-top: 15px;
  height: 40vh;
  padding: 10px 20px;
  border-radius: 20px;
  color: #e6e6e6;
`;

const StyledOtherBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 20px;
  color: black;
  font-weight: 600;
  min-height: 177px;

  & small {
    margin-bottom: 10px;
  }

  & p {
    font-size: 24px;
    text-align: center;
  }
`;

const StyledOtherBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestDetails = (props) => {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestDetails(props.match.params.id).then((response) =>
      setTest(JSON.parse(response.data))
    );
  }, []);

  const handleClose = () => {
    props.history.push("/tests");
  };

  return (
    <DashboardTemplate>
      <StyledTitleContainer>
        <ButtonIcon onClick={handleClose}>
          <IconX size={36} color="black" stroke={2} strokeLinejoin="miter" />
        </ButtonIcon>
        <h1> Test diagnozujący / Wynik </h1>
      </StyledTitleContainer>
      <StyledContainer>
        {test && (
          <div>
            <h2>Test zrealizowany: {test.createdAt}</h2>
            <StyledOtherBox>
              <StyledOtherBoxContainer>
                <StyledOtherBoxWrapper>
                  <small>Percepcja wizualna</small>
                  <CircleChart
                    points={test.perceptionPoints}
                    maxPoints={test.perceptionMaxPoints}
                  />
                </StyledOtherBoxWrapper>
                <StyledOtherBoxWrapper>
                  <small>Kreowanie wizualne</small>
                  <CircleChart
                    points={test.productionPoints}
                    maxPoints={test.productionMaxPoints}
                  />
                </StyledOtherBoxWrapper>
                <StyledOtherBoxWrapper>
                  <small>Odczyt wizualny</small>
                  <CircleChart
                    points={test.receptionPoints}
                    maxPoints={test.receptionMaxPoints}
                  />
                </StyledOtherBoxWrapper>
              </StyledOtherBoxContainer>
            </StyledOtherBox>
          </div>
        )}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default TestDetails;
