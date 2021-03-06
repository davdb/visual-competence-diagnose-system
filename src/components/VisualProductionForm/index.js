import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "react-validation/build/form";
import MyInput from "../../components/Input";
import CheckButton from "react-validation/build/button";
import FileUploader from "../FileUploader";
import VisualProductionOption from "./VisualProductionOption";
import {
  createVisualProduction,
  editVisualProduction,
} from "../../actions/visualproduction";
import Button from "../Button";
import { IconArrowNarrowRight } from "@tabler/icons";

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

const shapesState = [
  {
    id: "1",
    required: true,
    name: "Kwadrat",
    value: 0,
    key: "Kwadrat",
  },
  { id: "2", required: true, name: "Koło", value: 0, key: "Koło" },
  {
    id: "3",
    required: true,
    name: "Trójkąt",
    value: 0,
    key: "Trójkąt",
  },
  {
    id: "4",
    required: true,
    name: "Linia",
    value: 0,
    key: "Linia",
  },
];

const colorsState = [
  {
    id: "1",
    required: true,
    name: "Czarny",
    value: 0,
    key: "#000000",
  },
  {
    id: "2",
    required: true,
    name: "Szary",
    value: 0,
    key: "#545454",
  },
  {
    id: "3",
    required: true,
    name: "Fioletowy",
    value: 0,
    key: "#800080",
  },
  {
    id: "4",
    required: true,
    name: "Niebieski",
    value: 0,
    key: "#0000FF",
  },
  {
    id: "5",
    required: true,
    name: "Zielony",
    value: 0,
    key: "#00FF00",
  },
  {
    id: "6",
    required: true,
    name: "Pomarańczowy",
    value: 0,
    key: "#FF8C00",
  },
  {
    id: "7",
    required: true,
    name: "Żółty",
    value: 0,
    key: "#FFFF00",
  },
  {
    id: "8",
    required: true,
    name: "Brązowy",
    value: 0,
    key: "#8B4513",
  },
  {
    id: "9",
    required: true,
    name: "Czerwony",
    value: 0,
    key: "#DA251D",
  },
  {
    id: "10",
    required: true,
    name: "Różowy",
    value: 0,
    key: "#FF69B4",
  },
  {
    id: "11",
    required: true,
    name: "Biały",
    value: 0,
    key: "#ffffff",
  },
];

const VisualProductionForm = ({ task, type }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [shapes, setShapes] = useState(shapesState);
  const [colors, setColors] = useState(colorsState);
  //const [files, setFiles] = useState([]);

  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task && type === "edit") {
      setName(task.name);
      setShapes(task.options.shapes);
      setColors(task.options.colors);
    }
  }, []);

  const onChangeName = (value) => {
    const name = value;
    setName(name);
  };

  // const onChangeSelectedFile = (files) => {
  //   setFiles(files);
  // };

  const onChangeShapesOptionsValue = (e) => {
    shapes[e.target.dataset.index] = {
      ...shapes[e.target.dataset.index],
      value: e.target.value,
    };
  };
  const onChangeColorsOptionsValue = (e) => {
    colors[e.target.dataset.index] = {
      ...colors[e.target.dataset.index],
      value: e.target.value,
    };
  };

  const handleForm = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      if (type === "edit") {
        dispatch(editVisualProduction(task.id, name, shapes, colors))
          .then(() => {
            setSuccessful(true);
          })
          .catch(() => {
            setSuccessful(false);
          });
      } else {
        dispatch(createVisualProduction(name, shapes, colors))
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
    <Form onSubmit={handleForm} ref={form}>
      <StyledFormTitle>
        {type === "edit" ? "Edytuj " : "Utwórz nowe "}zadanie dla kompetencji
        kreowania wizualnego
      </StyledFormTitle>
      {!successful && (
        <div>
          <MyInput
            label="Nazwa zadania"
            required
            type="text"
            value={name}
            onChange={onChangeName}
          />

          {/* <FileUploader
            accept=".jpg,.png,.jpeg"
            label="Plik ilustrujący zadanie"
            updateFilesCb={onChangeSelectedFile}
            multiple
          /> */}

          <StyledOptionsContainer>
            <StyledOptionsContainerTitle>Kształty</StyledOptionsContainerTitle>
            {shapes.map((item, index) => {
              return (
                <VisualProductionOption
                  name={item.name}
                  index={index}
                  value={item.value}
                  required={item.required}
                  onChangeOptionsValue={onChangeShapesOptionsValue}
                  key={item.id}
                />
              );
            })}
          </StyledOptionsContainer>
          <StyledOptionsContainer>
            <StyledOptionsContainerTitle>Kolory</StyledOptionsContainerTitle>
            {colors.map((item, index) => {
              return (
                <VisualProductionOption
                  name={item.name}
                  index={index}
                  value={item.value}
                  required={item.required}
                  onChangeOptionsValue={onChangeColorsOptionsValue}
                  key={item.id}
                />
              );
            })}
          </StyledOptionsContainer>

          <StyledButtonContainer>
            <StyledButton>
              <span>
                {type === "edit" ? "Edytuj zadanie " : "Utwórz zadanie "}
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
  );
};

export default VisualProductionForm;
