import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import MyInput from "../Input";
import Button from "../Button";
import { IconArrowNarrowRight } from "@tabler/icons";

import { login } from "../../actions/auth";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StyledForm = styled(Form)`
  background: white;
  border: 2px solid #e6e6e6;
  border-radius: 20px;
  padding: 20px 30px;
  width: 40%;
  height: 60vh;
`;

const StyledFormTitle = styled.h1`
  width: 100%;
  font-weight: bold;
  letter-spacing: 2.2px;
  border-bottom: 4px solid #6d64ff;
  text-align: center;
`;

const StyledFormOption = styled.div``;

const StyledLabel = styled.label``;

const StyledInput = styled(Input)``;

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

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const LoginForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          return <Redirect to="/dashboard" />;
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleLogin} ref={form} className="w-1/4 h-1/2">
        <StyledFormTitle>Logowanie</StyledFormTitle>
        <MyInput
          type="email"
          name="email"
          label="Adres email"
          value={email}
          onChange={onChangeEmail}
          validations={[required]}
        />

        <MyInput
          label="Hasło"
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
        />

        <StyledButtonContainer>
          <StyledButton type="submit">
            <span>Zaloguj się</span>
            <IconArrowNarrowRight color="black" stroke={2} />
          </StyledButton>
        </StyledButtonContainer>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginForm;
