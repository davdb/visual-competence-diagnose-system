import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "react-validation/build/form";
import MyInput from "../../components/Input";
import CheckButton from "react-validation/build/button";
import VisualPerceptionOption from "./VisualPerceptionOption";
import FileUploader from "../FileUploader";
import { IconPlus } from "@tabler/icons";
import { IconArrowNarrowRight } from "@tabler/icons";
import {
  createVisualPerception,
  editVisualPerception,
} from "../../actions/visualperception";
import ButtonIcon from "../Button/ButtonIcon";
import Button from "../Button";

const StyledOptionsContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 0.25em;
  padding: 8px 10px;
  position: relative;
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

const StyledOptionsTitle = styled.div`
  display: flex;
  align-items: center;

  & label {
    color: #757575;
  }
  & button {
    transform: none;
    margin-left: 10px;
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

const VisualPerceptionForm = ({ task, type }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [options, setOptions] = useState([]);
  const [optionsComponent, setOptionsComponent] = useState(0);

  const [successful, setSuccessful] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (task && type === "edit") {
      setName(task.name);
      setOptions(task.options);
      setOptionsComponent(task.options.length);
    }
  }, []);

  const onChangeName = (value) => {
    const name = value;
    setName(name);
  };

  const onChangeSelectedFile = (file) => {
    setSelectedFile(file[0]);
  };

  const onChangeOptionName = (value, index) => {
    options[index].name = value;
  };

  const onChangeOptionValue = (value, index) => {
    options[index].value = value;
  };

  const handleDeleteOption = (e) => {
    e.preventDefault();
    const index = e.target.closest("button").dataset.counter;
    options.splice(index, 1);
    e.target.closest("button").parentElement.remove();
  };

  const handleForm = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      if (type === "edit") {
        dispatch(editVisualPerception(task.id, name, selectedFile, options))
          .then(() => {
            setSuccessful(true);
            window.location.reaload();
          })
          .catch(() => {
            setSuccessful(false);
          });
      } else {
        dispatch(createVisualPerception(name, selectedFile, options))
          .then(() => {
            setSuccessful(true);
            window.location.reload();
          })
          .catch(() => {
            setSuccessful(false);
          });
      }
    }
  };

  const handleNewOption = (e) => {
    setOptionsComponent(optionsComponent + 1);
    options.push({ name: "", value: "" });
  };

  return (
    <Form onSubmit={handleForm} ref={form}>
      <StyledFormTitle>
        Utwórz nowe zadanie dla kompetencji percepcji wizualnej
      </StyledFormTitle>
      {!successful && (
        <div>
          <MyInput
            label="Nazwa zadania"
            type="text"
            required
            value={name}
            onChange={onChangeName}
          />

          <FileUploader
            accept=".jpg,.png,.jpeg,.svg"
            label="Plik ilustrujący zadanie"
            updateFilesCb={onChangeSelectedFile}
            uploadedFile={task && type == "edit" ? task.image : null}
          />

          <StyledOptionsContainer>
            <StyledOptionsTitle>
              <label> Odpowiedzi </label>
              <ButtonIcon type="button" small onClick={handleNewOption}>
                <IconPlus size={16} color="black" />
              </ButtonIcon>
            </StyledOptionsTitle>
            <div id="options_container">
              {[...Array(optionsComponent)].map((item, i) => (
                <VisualPerceptionOption
                  counter={i}
                  key={i}
                  name={options[i].name}
                  option={options[i]}
                  onChangeOptionName={onChangeOptionName}
                  onChangeOptionValue={onChangeOptionValue}
                  handleDeleteOption={handleDeleteOption}
                />
              ))}
            </div>
          </StyledOptionsContainer>

          <StyledButtonContainer>
            <StyledButton type="submit">
              <span>
                {type === "edit" ? "Edytuj zadanie" : "Utwórz zadanie"}
              </span>
              <IconArrowNarrowRight color="black" stroke={2} />
            </StyledButton>
          </StyledButtonContainer>
        </div>
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
  );
};

export default VisualPerceptionForm;
