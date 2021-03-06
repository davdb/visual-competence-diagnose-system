import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import DataTable from "react-data-table-component";
import { Redirect } from "react-router-dom";
import {
  fetchAllUsers,
  deleteUserAccount,
  changeEnabledUserAccount,
} from "../../../actions/user";
import ButtonIcon from "../../../components/Button/ButtonIcon";
import { IconTrash, IconPencil, IconLock } from "@tabler/icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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

const StyledContainer = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 20px;
  padding: 10px 20px;
`;

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: null,
      redirectUrl: null,
      loading: true,
    };
  }

  componentDidMount() {
    const {
      fetchAllUsers,
      deleteUserAccount,
      changeEnabledUserAccount,
    } = this.props;
    fetchAllUsers();
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { users } = this.props;
    const { loading, redirectUrl } = this.state;

    const columns = [
      {
        name: "Adres email",
        selector: "email",
        sortable: true,
        right: false,
      },
      {
        name: "Wiek",
        selector: "age",
        sortable: true,
        right: true,
      },
      {
        name: "Grupa",
        selector: "roles",
        sortable: true,
        right: false,
      },
      {
        name: "Aktywny",
        selector: "enabled",
        sortable: true,
        right: false,
      },
      {
        name: "Akcje",
        sortable: false,
        cell: (row) => (
          <StyledActionButtonsContainer>
            <div>
              <ButtonIcon small data-id={row.id} onClick={handleEditButton}>
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
                onClick={handleChangeEnabledButton}
              >
                <IconLock
                  size={16}
                  color="black"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              </ButtonIcon>
              <StyledSpanHelper aria-hidden="true">Zablokuj</StyledSpanHelper>
            </div>
            <div>
              <ButtonIcon small data-id={row.id} onClick={handleMainButton}>
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

    const handleMainButton = (event) => {
      const { deleteUserAccount } = this.props;
      const rowId = event.target.closest("button").dataset.id;

      confirmAlert({
        title: "Potwierdź usunięcie",
        message:
          "Po potwierdzeniu rekord zostanie bezpowrotnie usunięty z bazy danych.",
        buttons: [
          {
            label: "Potwierdź",
            onClick: () =>
              deleteUserAccount(rowId).then(() => window.location.realod()),
          },
          {
            label: "Wróć",
            onClick: () => 0,
          },
        ],
      });
    };
    const handleChangeEnabledButton = (event) => {
      const { changeEnabledUserAccount } = this.props;
      const rowId = event.target.closest("button").dataset.id;

      confirmAlert({
        title: "Potwierdź akcję",
        message:
          "Po potwierdzeniu wybrane konto zostanie zablokowane/odblokowane.",
        buttons: [
          {
            label: "Potwierdź",
            onClick: () =>
              changeEnabledUserAccount(rowId).then(() =>
                window.location.reload()
              ),
          },
          {
            label: "Wróć",
            onClick: () => 0,
          },
        ],
      });
    };

    const handleEditButton = (e) => {
      const url = "/user/" + e.target.closest("button").dataset.id + "/edit";

      this.setState((state, props) => {
        return {
          redirectUrl: url,
        };
      });

      this.props.history.push("/users");
    };

    if (redirectUrl) return <Redirect to={redirectUrl} />;

    return (
      <DashboardTemplate>
        <h1>Zarządzanie użytkownikami</h1>
        <StyledContainer>
          {!loading ? (
            <DataTable
              title="Tabela przedstawiająca użytkowników w systemie"
              columns={columns}
              data={users}
              pagination={true}
              highlightOnHover={true}
              paginationComponentOptions={{
                rowsPerPageText: "Wiersze na stronie:",
                rangeSeparatorText: "z",
                noRowsPerPage: false,
                selectAllRowsItem: false,
                selectAllRowsItemText: "Wszystkie",
              }}
            />
          ) : (
            <div className="loader"></div>
          )}
        </StyledContainer>
      </DashboardTemplate>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    users: user.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllUsers: (data) => dispatch(fetchAllUsers()),
    deleteUserAccount: (data) => dispatch(deleteUserAccount(data)),
    changeEnabledUserAccount: (data) =>
      dispatch(changeEnabledUserAccount(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
