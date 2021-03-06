import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import Tabs from "../../../components/Tabs";
import DataTable from "react-data-table-component";
import { Redirect } from "react-router-dom";
import { Fab } from "react-tiny-fab";
import { IconPlus, IconPencil, IconTrash, IconEye } from "@tabler/icons";
import ButtonIcon from "../../../components/Button/ButtonIcon";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
  fetchAllVisualPerceptionTasks,
  deleteVisualPerceptionTask,
} from "../../../actions/visualperception";
import {
  fetchAllVisualProductionTasks,
  deleteVisualProductionTask,
} from "../../../actions/visualproduction";
import {
  fetchAllVisualReceptionTasks,
  deleteVisualReceptionTask,
} from "../../../actions/visualreception";

const StyledActionButtonsContainer = styled.div`
  display: flex;
  padding: 10px 5px;
  & button {
    margin: 0 10px 10px 0;
    &:hover {
      background: white;
      & + span {
        opacity: 1;
        display: block;
      }
    }
  }
`;

const StyledContainer = styled.div`
  padding: 10px 20px;
  border: 2px solid #e6e6e6;
  border-radius: 20px;
`;

const StyledFab = styled(Fab)`
  box-sizing: border-box;
  margin: 25px;
  position: fixed;
  white-space: nowrap;
  z-index: 9998;
  padding-left: 0;
  list-style: none;

  button.rtf--mb {
    box-shadow: none;
    background: #6d64ff;
  }

  span.right {
    background: black;
    padding: 4px 10px;
    border-radius: 6px;
  }
`;

const StyledSpanHelper = styled.span`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  top: 57%;
  margin-left: 30px;
  display: none;
  transform: translateY(-50%);
  color: black;
  font-size: 13px;
  background: white;
  padding: 4px 10px;
  z-index: 99;
  border-radius: 6px;
`;

const TestCaseList = (props) => {
  const [redirectUrl, setRedirectUrl] = useState(false);
  const [loading, setLoading] = useState(true);
  const perceptionTasks = useSelector((state) => state.testcases.perception);
  const productionTasks = useSelector((state) => state.testcases.production);
  const receptionTasks = useSelector((state) => state.testcases.reception);
  const dispatch = useDispatch();

  const columnsPerception = [
    {
      name: "Nazwa zadania",
      selector: "name",
      sortable: true,
      right: false,
    },
    {
      name: "Akcje",
      sortable: false,
      cell: (row) => (
        <StyledActionButtonsContainer>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleDetailsButtonOnClick}
            >
              <IconEye
                size={16}
                color="blue"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Podgląd</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleEditButtonOnClick}
            >
              <IconPencil
                size={16}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Edytuj</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleDeleteButtonOnClick}
            >
              <IconTrash
                size={16}
                color="#da251d"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Usuń</StyledSpanHelper>
          </div>
        </StyledActionButtonsContainer>
      ),
    },
  ];
  const columnsProduction = [
    {
      name: "Nazwa zadania",
      selector: "name",
      sortable: true,
      right: false,
    },
    {
      name: "Akcje",
      sortable: false,
      cell: (row) => (
        <StyledActionButtonsContainer>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleProductionDetailsButtonOnClick}
            >
              <IconEye
                size={16}
                color="blue"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Podgląd</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleProductionEditButtonOnClick}
            >
              <IconPencil
                size={16}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Edytuj</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleProductionDeleteButtonOnClick}
            >
              <IconTrash
                size={16}
                color="#da251d"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Usuń</StyledSpanHelper>
          </div>
        </StyledActionButtonsContainer>
      ),
    },
  ];
  const columnsReception = [
    {
      name: "Nazwa zadania",
      selector: "name",
      sortable: true,
      right: false,
    },
    {
      name: "Akcje",
      sortable: false,
      cell: (row) => (
        <StyledActionButtonsContainer>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleReceptionDetailsButtonOnClick}
            >
              <IconEye
                size={16}
                color="blue"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Podgląd</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleReceptionEditButtonOnClick}
            >
              <IconPencil
                size={16}
                color="black"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Edytuj</StyledSpanHelper>
          </div>
          <div>
            <ButtonIcon
              small
              data-id={row.id}
              onClick={handleReceptionDeleteButtonOnClick}
            >
              <IconTrash
                size={16}
                color="#da251d"
                stroke={2}
                strokeLinejoin="miter"
              />
            </ButtonIcon>
            <StyledSpanHelper aria-hidden="true">Usuń</StyledSpanHelper>
          </div>
        </StyledActionButtonsContainer>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchAllVisualPerceptionTasks())
      .then(() => setTimeout(() => setLoading(false), 1000))
      .catch(() => {});
    dispatch(fetchAllVisualProductionTasks())
      .then(() => setTimeout(() => setLoading(false), 1000))
      .catch(() => {});
    dispatch(fetchAllVisualReceptionTasks())
      .then(() => setTimeout(() => setLoading(false), 1000))
      .catch(() => {});
  }, []);

  const handleDeleteButtonOnClick = (event) => {
    const rowId = event.target.closest("button").dataset.id;
    confirmAlert({
      title: "Potwierdź usunięcie",
      message: "Po potwierdzeniu rekord zostanie usunięty z bazy danych.",
      buttons: [
        {
          label: "Potwierdź",
          onClick: () => dispatch(deleteVisualPerceptionTask(rowId)),
        },
        {
          label: "Wróć",
          onClick: () => 0,
        },
      ],
    });
  };
  const handleProductionDeleteButtonOnClick = (event) => {
    const rowId = event.target.closest("button").dataset.id;
    confirmAlert({
      title: "Potwierdź usunięcie",
      message: "Po potwierdzeniu rekord zostanie usunięty z bazy danych.",
      buttons: [
        {
          label: "Potwierdź",
          onClick: () => dispatch(deleteVisualProductionTask(rowId)),
        },
        {
          label: "Wróć",
          onClick: () => 0,
        },
      ],
    });
  };
  const handleReceptionDeleteButtonOnClick = (event) => {
    const rowId = event.target.closest("button").dataset.id;
    confirmAlert({
      title: "Potwierdź usunięcie",
      message: "Po potwierdzeniu rekord zostanie usunięty z bazy danych.",
      buttons: [
        {
          label: "Potwierdź",
          onClick: () => dispatch(deleteVisualReceptionTask(rowId)),
        },
        {
          label: "Wróć",
          onClick: () => 0,
        },
      ],
    });
  };

  const handleEditButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-perception/task/" +
        e.target.closest("button").dataset.id +
        "/edit"
    );
    props.history.push("/test/cases");
  };

  const handleProductionEditButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-production/task/" +
        e.target.closest("button").dataset.id +
        "/edit"
    );
    props.history.push("/test/cases");
  };

  const handleReceptionEditButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-reception/task/" +
        e.target.closest("button").dataset.id +
        "/edit"
    );
    props.history.push("/test/cases");
  };

  const handleDetailsButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-perception/task/" +
        e.target.closest("button").dataset.id
    );
    props.history.push("/test/cases");
  };

  const handleProductionDetailsButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-production/task/" +
        e.target.closest("button").dataset.id
    );
    props.history.push("/test/cases");
  };

  const handleReceptionDetailsButtonOnClick = (e) => {
    setRedirectUrl(
      "/test/case/visual-reception/task/" +
        e.target.closest("button").dataset.id
    );
    props.history.push("/test/cases");
  };

  if (redirectUrl) return <Redirect to={redirectUrl} />;

  return (
    <DashboardTemplate>
      <h1>Lista zdań testowych</h1>
      <StyledContainer>
        {!loading ? (
          <Tabs>
            <div label="Percepcja wizualna">
              <StyledFab
                icon={
                  <IconPlus
                    size={36}
                    color="#e6e6e6"
                    stroke={2}
                    strokeLinejoin="miter"
                  />
                }
                text={"Dodaj nowe zadanie"}
                onClick={() =>
                  setRedirectUrl("/test/case/visual-perception/create")
                }
              ></StyledFab>
              <DataTable
                title="Lista zadań dotyczących percepcji wizualnej"
                columns={columnsPerception}
                data={perceptionTasks}
                pagination={true}
                paginationComponentOptions={{
                  rowsPerPageText: "Wiersze na stronie:",
                  rangeSeparatorText: "z",
                  noRowsPerPage: false,
                  selectAllRowsItem: false,
                  selectAllRowsItemText: "Wszystkie",
                }}
                highlightOnHover={true}
              />
            </div>
            <div label="Kreowanie wizualne">
              <StyledFab
                icon={
                  <IconPlus
                    size={36}
                    color="#e6e6e6"
                    stroke={2}
                    strokeLinejoin="miter"
                  />
                }
                text={"Dodaj nowe zadanie"}
                onClick={() =>
                  setRedirectUrl("/test/case/visual-production/create")
                }
              ></StyledFab>
              <DataTable
                title="Lista zadań dotyczących produkcji wizualnej"
                columns={columnsProduction}
                data={productionTasks}
                pagination={true}
                paginationComponentOptions={{
                  rowsPerPageText: "Wiersze na stronie:",
                  rangeSeparatorText: "z",
                  noRowsPerPage: false,
                  selectAllRowsItem: false,
                  selectAllRowsItemText: "Wszystkie",
                }}
                highlightOnHover={true}
              />
            </div>
            <div label="Odbiór wizualny">
              <StyledFab
                icon={
                  <IconPlus
                    size={36}
                    color="#e6e6e6"
                    stroke={2}
                    strokeLinejoin="miter"
                  />
                }
                text={"Dodaj nowe zadanie"}
                onClick={() =>
                  setRedirectUrl("/test/case/visual-reception/create")
                }
              ></StyledFab>
              <DataTable
                title="Lista zadań dotyczących odbioru wizualnego"
                columns={columnsReception}
                data={receptionTasks}
                pagination={true}
                paginationComponentOptions={{
                  rowsPerPageText: "Wiersze na stronie:",
                  rangeSeparatorText: "z",
                  noRowsPerPage: false,
                  selectAllRowsItem: false,
                  selectAllRowsItemText: "Wszystkie",
                }}
                highlightOnHover={true}
              />
            </div>
          </Tabs>
        ) : (
          <div className="loader" />
        )}
      </StyledContainer>
    </DashboardTemplate>
  );
};

export default TestCaseList;
