import React, { Component } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import { Redirect } from "react-router-dom";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import { connect } from "react-redux";
import { fetchAllTests } from "../../../actions/test";
import { IconEye } from "@tabler/icons";
import ButtonIcon from "../../../components/Button/ButtonIcon";

const StyledContainer = styled.div`
  border: 2px solid #e6e6e6;
  border-radius: 20px;
  padding: 10px 20px;
`;

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

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectUrl: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { fetchAllTests } = this.props;
    fetchAllTests();
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    const { tests } = this.props;
    const { redirectUrl, loading } = this.state;

    const handleDetails = (e) => {
      const url = "/test/" + e.target.closest("button").dataset.id + "/details";

      this.setState((state, props) => {
        return {
          redirectUrl: url,
        };
      });

      this.props.history.push("/tests");
    };

    if (redirectUrl) return <Redirect to={redirectUrl} />;

    const columns = [
      {
        name: "Użytkownik",
        selector: "owner",
        sortable: true,
        right: false,
      },
      {
        name: "Data wyk.",
        selector: "createdAt",
        sortable: true,
        right: false,
      },
      {
        name: "Punkty percepcji wiz.",
        selector: "perceptionPoints",
        sortable: true,
        right: false,
      },
      {
        name: "Punkty kreowania wiz.",
        selector: "productionPoints",
        sortable: true,
        right: false,
      },
      {
        name: "Punkty odczytu wiz.",
        selector: "receptionPoints",
        sortable: true,
        right: false,
      },
      {
        name: "Akcje",
        sortable: false,
        cell: (row) => (
          <StyledActionButtonsContainer>
            <div>
              <ButtonIcon small data-id={row.id} onClick={handleDetails}>
                <IconEye
                  size={16}
                  color="blue"
                  stroke={2}
                  strokeLinejoin="miter"
                />
              </ButtonIcon>

              <StyledSpanHelper aria-hidden="true">Podgląd</StyledSpanHelper>
            </div>
          </StyledActionButtonsContainer>
        ),
      },
    ];

    return (
      <DashboardTemplate>
        <h1>Testy</h1>
        <StyledContainer>
          {!loading ? (
            <DataTable
              title="Tabela przedstawiająca zrealizowane testy"
              columns={columns}
              data={tests}
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
            <div className="loader" />
          )}
        </StyledContainer>
      </DashboardTemplate>
    );
  }
}

function mapStateToProps(state) {
  const { test } = state;
  return {
    tests: test.tests,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTests: (data) => dispatch(fetchAllTests()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
