import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../Input";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Button from "../Button";
import { IconArrowNarrowRight } from "@tabler/icons";

import { register } from "../../actions/auth";

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
`;

const StyledFormTitle = styled.div`
  width: 100%;
  border-bottom: 4px solid #6d64ff;
  & h1 {
    text-align: center;
    font-weight: bold;
    letter-spacing: 2.2px;
  }
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

const StyledInformationContainer = styled.div`
  margin-top: 25px;
  font-size: 12px;
  color: gray;
  text-align: justify;
  & a {
    color: #385898;
    cursor: pointer;
    text-decoration: none;
  }
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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const validPassword2AreTheSameLikePassword1 = (value) => {
  if (value !== password) {
    return console.log("Hasła nie są takie same");
  }
};

const RegisterForm = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeEmail = (value) => {
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const onChangePassword2 = (value) => {
    setPassword2(value);
  };

  const onChangeAge = (value) => {
    setAge(value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(email, age, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleRegister} ref={form}>
        <StyledFormTitle>
          <h1>Zarejestruj się</h1>
        </StyledFormTitle>

        <MyInput
          label="Adres email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[required, validEmail]}
        />

        <MyInput
          label="Wiek"
          type="number"
          name="age"
          min="1"
          value={age}
          onChange={onChangeAge}
          validations={[required]}
        />

        <MyInput
          label="Hasło"
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required, vpassword]}
        />

        <MyInput
          label="Powtórz hasło"
          type="password"
          name="password2"
          value={password2}
          onChange={onChangePassword2}
          validations={[
            required,
            vpassword,
            validPassword2AreTheSameLikePassword1,
          ]}
        />

        <StyledInformationContainer>
          Klikając przycisk Utwórz konto, akceptujesz nasz{" "}
          <a href="#!" target="_blank" rel="nofollow">
            Regulamin
          </a>
          .{" "}
          <a href="#!" target="_blank" rel="nofollow">
            Zasady dotyczące danych
          </a>{" "}
          informują, w jaki sposób gromadzimy, użytkujemy i udostępniamy dane
          użytkowników, a{" "}
          <a href="#!" target="_blank" rel="nofollow">
            Zasady dotyczące plików cookie
          </a>{" "}
          informują jak korzystamy z plików cookie i podobnych technologii.
        </StyledInformationContainer>

        <StyledButtonContainer>
          <StyledButton type="submit">
            <span>Utwórz konto</span>
            <IconArrowNarrowRight color="black" stroke={2} />
          </StyledButton>
        </StyledButtonContainer>

        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </StyledForm>
    </StyledContainer>
  );
};

export default RegisterForm;
