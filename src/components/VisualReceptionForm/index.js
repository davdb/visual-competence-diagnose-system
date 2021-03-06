import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "react-validation/build/form";
import MyInput from "../../components/Input";
import CheckButton from "react-validation/build/button";
import FileUploader from "../FileUploader";
import VisualReceptionOption from "./VisualReceptionOption";
import {
  createVisualReception,
  editVisualReception,
} from "../../actions/visualreception";
import Button from "../Button";
import { IconArrowNarrowRight } from "@tabler/icons";

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

const options = [
  {
    id: "1",
    required: true,
    name: "Znaczenie spontaniczne",
    content: "",
    value: 10,
  },
  { id: "2", required: true, name: "Znaczenie stałe", content: "", value: 10 },
  {
    id: "3",
    required: true,
    name: "Znaczenie utajone",
    content: "",
    value: 10,
  },
  {
    id: "4",
    required: false,
    name: "Znaczenie deklarowane",
    content: "",
    value: 2,
  },
  {
    id: "5",
    required: false,
    name: "Znaczenie artykułowe",
    content: "",
    value: 2,
  },
  {
    id: "6",
    required: false,
    name: "Znaczenie kontekstowe",
    content: "",
    value: 2,
  },
  {
    id: "7",
    required: false,
    name: "Znaczenie intertekstualne",
    content: "",
    value: 2,
  },
  {
    id: "8",
    required: false,
    name: "Znaczenie transtekstualne",
    content: "",
    value: 2,
  },
];

const VisualReceptionForm = ({ task, type }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [means, setMeans] = useState(options);

  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task && type === "edit") {
      setName(task.name);
      setMeans(task.options);
    }
  }, []);

  const onChangeName = (value) => {
    const name = value;
    setName(name);
  };

  const onChangeSelectedFile = (file) => {
    setSelectedFile(file[0]);
  };

  const onChangeOptionsValue = (e) => {
    means[e.target.dataset.index] = {
      ...means[e.target.dataset.index],
      content: e.target.value,
    };
  };

  const handleForm = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      if (type === "edit") {
        dispatch(editVisualReception(task.id, name, selectedFile, means))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
      } else {
        dispatch(createVisualReception(name, selectedFile, means))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
      }
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleForm} ref={form}>
          {!successful && (
            <div>
              <MyInput
                label="Nazwa zadania"
                type="text"
                value={name}
                onChange={onChangeName}
              />

              <FileUploader
                accept=".jpg,.png,.jpeg"
                label="Plik ilustrujący zadanie"
                updateFilesCb={onChangeSelectedFile}
                uploadedFile={task && type == "edit" ? task.image : null}
              />
              <StyledOptionsContainer>
                <StyledOptionsContainerTitle>
                  Semantyka obrazu wg. Doelkera
                </StyledOptionsContainerTitle>
                {means.map((item, index) => {
                  return (
                    <VisualReceptionOption
                      name={item.name}
                      index={index}
                      value={means[index].content}
                      required={item.required}
                      onChangeOptionsValue={onChangeOptionsValue}
                      key={item.id}
                    />
                  );
                })}
              </StyledOptionsContainer>

              <StyledButtonContainer>
                <StyledButton>
                  <span>
                    {type === "edit" ? "Edytuj zadanie" : "Utwórz zadanie"}
                  </span>
                  <IconArrowNarrowRight color="black" stroke={2} />
                </StyledButton>
              </StyledButtonContainer>
            </div>
          )}

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
        </Form>
      </div>
    </div>
  );
};

export default VisualReceptionForm;
