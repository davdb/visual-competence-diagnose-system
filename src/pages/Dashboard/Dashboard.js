import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import DashboardTemplate from "../../templates/DashboardTemplate";
import Button from "../../components/Button";
import { IconArrowNarrowRight, IconMail, IconFaceId } from "@tabler/icons";
import CircleChart from "../../components/Charts/CircleChart";
import { fetchTestsStatistics } from "../../services/test.service";
import { fetchUserInfo } from "../../services/user.service";

const mappedRole = {
  ROLE_ADMIN: "Administrator",
  ROLE_MODERATOR: "Moderator",
  ROLE_USER: "Użytkownik",
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const StyledRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledColWrapper = styled.div`
  flex: 4;
  margin-right: 15px;
`;

const StyledUserBox = styled.div`
  background: #e6e6e6;
  min-height: 40vh;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const StyledOtherBox = styled.div`
  background: #6d64ff;
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
  background: #e6e6e6;
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

const StyledUserInfoBox = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 20px;
  padding: 10px 20px;
  flex: 1;
`;

const StyledUserInfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledUserInfoBoxIcon = styled.div`
  background-image: url("/img/svg/placeholder-user.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const StyledUserBoxImage = styled.div`
  display: block;
  background-image: url("/img/svg/goals.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  margin-right: 20px;
`;

const StyledUserBoxContent = styled.div`
  border-left: 2px solid #6d64ff;
  padding: 10px 20px;
  margin-left: 20px;
`;

const StyledUserBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin: 0;
  border: 0;
  background: transparent;
`;

const StyledUserInfoItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  & svg {
    margin-right: 10px;
  }
`;

const Dashboard = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [statistics, setStatistics] = useState(null);
  const [statisticsLoader, setStatisticLoader] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [userInfoLoader, setUserInfoLoader] = useState(true);
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    fetchTestsStatistics().then((response) => {
      setStatistics(JSON.parse(response));

      setTimeout(() => setStatisticLoader(false), 1000);
    });

    fetchUserInfo().then((response) => {
      setUserInfo(JSON.parse(response));
      setTimeout(() => setUserInfoLoader(false), 1000);
    });
  }, []);

  const handleTestStartOnClick = () => {
    setRedirectUrl("/test/create");
  };

  if (redirectUrl) return <Redirect to={redirectUrl} />;

  return (
    <DashboardTemplate>
      <h1> Panel główny</h1>
      <StyledContainer>
        <StyledRowWrapper>
          <StyledColWrapper>
            <StyledUserBox>
              <StyledUserBoxWrapper>
                <StyledUserBoxImage />
                <StyledUserBoxContent>
                  <h3>System wspomagający diagnozę kompetencji wizualnych</h3>
                  <p>Sprawdź poziom rozwoju swoich kompetencji wizualnych</p>
                  <StyledButton onClick={handleTestStartOnClick}>
                    <span>Rozpocznij test</span>
                    <IconArrowNarrowRight color="black" stroke={2} />
                  </StyledButton>
                </StyledUserBoxContent>
              </StyledUserBoxWrapper>
            </StyledUserBox>

            <StyledOtherBox>
              <h2>Statystyki</h2>

              {statistics && !statisticsLoader ? (
                <StyledOtherBoxContainer>
                  <StyledOtherBoxWrapper>
                    <small>Percepcja wizualna</small>
                    <CircleChart
                      points={statistics.perception}
                      maxPoints={statistics.maxPerception}
                    />
                  </StyledOtherBoxWrapper>
                  <StyledOtherBoxWrapper>
                    <small>Produkcja wizualna</small>
                    <CircleChart
                      points={statistics.production}
                      maxPoints={statistics.maxProduction}
                    />
                  </StyledOtherBoxWrapper>
                  <StyledOtherBoxWrapper>
                    <small>Odczyt wizualny</small>
                    <CircleChart
                      points={statistics.reception}
                      maxPoints={statistics.maxReception}
                    />
                  </StyledOtherBoxWrapper>
                  <StyledOtherBoxWrapper>
                    <small>Liczba wykonanych testów</small>
                    <p>{statistics.counter}</p>
                  </StyledOtherBoxWrapper>
                </StyledOtherBoxContainer>
              ) : (
                <div className="loader"></div>
              )}
            </StyledOtherBox>
          </StyledColWrapper>

          <StyledUserInfoBox>
            <h2>Ja w systemie</h2>
            {userInfo && !userInfoLoader ? (
              <StyledUserInfoBoxWrapper>
                <StyledUserInfoBoxIcon />
                <StyledUserInfoItem>
                  <IconMail color="black" stroke={2} />
                  <span>{userInfo.email}</span>
                </StyledUserInfoItem>
                <StyledUserInfoItem>
                  <IconFaceId color="black" stroke={2} />
                  <span> {mappedRole[userInfo.group]}</span>
                </StyledUserInfoItem>
              </StyledUserInfoBoxWrapper>
            ) : (
              <div className="loader" />
            )}
          </StyledUserInfoBox>
        </StyledRowWrapper>
      </StyledContainer>
    </DashboardTemplate>
  );
};
export default Dashboard;
