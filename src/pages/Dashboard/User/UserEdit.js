import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import ButtonIcon from "../../../components/Button/ButtonIcon";
import styled from "styled-components";
import { IconX } from "@tabler/icons";
import MyInput from "../../../components/Input";
import Dropdown from "../../../components/Dropdown";
import { IconArrowNarrowRight } from "@tabler/icons";
import Button from "../../../components/Button";
import CheckButton from "react-validation/build/button";

import { fetchUserInfoById } from "../../../services/user.service";
import { editUserAccount } from "../../../actions/user";

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

const StyledFormTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  font-size: 22px;
  padding-left: 16px;
  padding-right: 8px;
  font-weight: 400;
  margin-top: 15px;
`;

const StyledDropdownContainer = styled.div`
  width: 100%;

  & .dropdown-wrapper {
    width: 100%;
    max-width: 100%;
    margin: 30px 0;
  }
`;

const StyledButton = styled(Button)`
  margin: 0;
  border: 0;
  background: transparent;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 20px 0;
`;

const mappedRole = {
  ROLE_ADMIN: "Administrator",
  ROLE_MODERATOR: "Moderator",
  ROLE_USER: "Użytkownik",
};

const answers = [
  {
    id: 0,
    title: "Użytkownik",
    selected: false,
    value: "ROLE_USER",
  },
  {
    id: 1,
    title: "Modetator",
    selected: false,
    value: "ROLE_MODERATOR",
  },
  {
    id: 2,
    title: "Administrator",
    selected: false,
    value: "ROLE_ADMIN",
  },
];

const UserEdit = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [loading, setLoading] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserInfoById(props.match.params.id).then((response) => {
      const ob = JSON.parse(response);
      setUser(ob);
      setEmail(ob.email);

      answers.forEach((item) => (item.selected = false));

      var grOb = answers.find((item) => item.value === ob.group[0]);
      grOb.selected = true;

      setGroup(ob.group[0]);

      setTimeout(() => setLoading(false), 1000);
    });
  }, []);

  const handleClose = () => {
    props.history.push("/users");
  };

  const handleOnChangeEmail = (email) => {
    setEmail(email);
  };

  const handleOnChangeGroup = (id, value) => {
    answers.forEach((item) => (item.selected = false));
    answers[id].selected = true;
    setGroup(value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(editUserAccount(props.match.params.id, email, group))
        .then(() => {
          window.location.reload();
        })
        .catch(() => {});
    }
  };

  return (
    <DashboardTemplate>
      <StyledTitleContainer>
        <ButtonIcon onClick={handleClose}>
          <IconX size={36} color="black" stroke={2} strokeLinejoin="miter" />
        </ButtonIcon>
        <h1> Użytkownicy / Edytuj dane</h1>
      </StyledTitleContainer>

      <StyledContainer>
        {!loading && user ? (
          <Form onSubmit={handleForm} ref={form}>
            <StyledFormTitle>Edytuj dane użytkownika</StyledFormTitle>
            {!successful && (
              <div>
                <MyInput
                  label="Adres email"
                  type="email"
                  required
                  value={email}
                  onChange={handleOnChangeEmail}
                />
                <StyledDropdownContainer>
                  <Dropdown
                    title={group ? mappedRole[group] : "Wskaż grupę"}
                    label={"Grupa"}
                    list={answers}
                    onChangeOptionValue={handleOnChangeGroup}
                  />
                </StyledDropdownContainer>
              </div>
            )}

            <StyledButtonContainer>
              <StyledButton type="submit">
                <span>Edytuj użytkownika</span>
                <IconArrowNarrowRight color="black" stroke={2} />
              </StyledButton>
            </StyledButtonContainer>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        ) : (
          <div className="loader" />
        )}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default UserEdit;
