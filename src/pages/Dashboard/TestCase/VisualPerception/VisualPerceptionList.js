import React, { Component } from "react";
//import { connect } from "react-redux";
import DashboardTemplate from "../../../../templates/DashboardTemplate";
import Button from "../../../../components/Button";
import { NavLink, Link, Redirect } from "react-router-dom";
import DataTable from "react-data-table-component";
// import { fetchAllUsers } from "../../../actions/user";

const columns = [
  {
    name: "name",
    selector: "name",
    sortable: true,
    right: true,
  },
  {
    name: "enabled",
    selector: "enabled",
    sortable: true,
    right: true,
  },
];
const list = [];

class VisualPerceptionList extends Component {
  componentDidMount() {
    // const { fetchAllUsers } = this.props;
    // fetchAllUsers();
  }
  render() {
    // const { users } = this.props;

    return (
      <DashboardTemplate>
        <h1>Percepcja wizualna \ Zadania</h1>
        <Link to="/test/case/visual-perception/create">Dodaj nową</Link>
        <DataTable
          title="Lista zadań"
          columns={columns}
          data={list}
          pagination={true}
          highlightOnHover={true}
        />
      </DashboardTemplate>
    );
  }
}

// function mapStateToProps(state) {
//   const { user } = state;
//   return {
//     users: user,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchAllUsers: (data) => dispatch(fetchAllUsers()),
//   };
// }
// connect(mapStateToProps, mapDispatchToProps)
export default VisualPerceptionList;
