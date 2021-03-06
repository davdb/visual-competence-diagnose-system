import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import DashboardTemplate from "../../../templates/DashboardTemplate";
import TestForm from "../../../components/TestForm";
import {
  fetchVisualPerceptionTasks,
  fetchVisualReceptionTasks,
  fetchVisualProductionTasks,
} from "../../../actions/test";

const StyledContainer = styled.div`
  border: 2px solid #e6e6e6;
  width: 100%;
  border-radius: 20px;
`;

class TestCreate extends Component {
  componentDidMount() {
    const {
      fetchVisualPerceptionTasks,
      fetchVisualReceptionTasks,
      fetchVisualProductionTasks,
    } = this.props;
    fetchVisualPerceptionTasks();
    fetchVisualProductionTasks();
    fetchVisualReceptionTasks();
  }
  render() {
    const { tasks } = this.props;
    return (
      <DashboardTemplate>
        <StyledContainer>
          <TestForm tasks={tasks} />
        </StyledContainer>
      </DashboardTemplate>
    );
  }
}

function mapStateToProps(state) {
  const { test } = state;
  return {
    tasks: test.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVisualPerceptionTasks: (data) =>
      dispatch(fetchVisualPerceptionTasks()),
    fetchVisualReceptionTasks: (data) => dispatch(fetchVisualReceptionTasks()),
    fetchVisualProductionTasks: (data) =>
      dispatch(fetchVisualProductionTasks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestCreate);
