import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoreTemplate from "../../templates/CoreTemplate";
import Home from "../Home/Home";
import PageView1 from "../Home/PageView1";
import PageView2 from "../Home/PageView2";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../HTTPExceptions/NotFound";
import store from "../../store";
import { Provider } from "react-redux";
import UserList from "../Dashboard/User/UserList";
import VisualPerceptionList from "../Dashboard/TestCase/VisualPerception/VisualPerceptionList";
import VisualPerceptionCreate from "../Dashboard/TestCase/VisualPerception/VisualPerceptionCreate";
import VisualPerceptionEdit from "../Dashboard/TestCase/VisualPerception/VisualPerceptionEdit";
import VisualPerceptionDetails from "../Dashboard/TestCase/VisualPerception/VisualPerceptionDetails";
import TestCreate from "../Dashboard/Test/TestCreate";
import TestList from "../Dashboard/Test/TestList";
import TestCaseList from "../Dashboard/TestCase/TestCaseList";
import VisualReceptionCreate from "../Dashboard/TestCase/VisualReception/VisualReceptionCreate";
import VisualReceptionDetails from "../Dashboard/TestCase/VisualReception/VisualReceptionDetails";
import VisualReceptionEdit from "../Dashboard/TestCase/VisualReception/VisualReceptionEdit";
import VisualProductionCreate from "../Dashboard/TestCase/VisualProduction/VisualProductionCreate";
import VisualProductionDetails from "../Dashboard/TestCase/VisualProduction/VisualProductionDetails";
import VisualProductionEdit from "../Dashboard/TestCase/VisualProduction/VisualProductionEdit";
import TestDetails from "../Dashboard/Test/TestDetails";
import UserEdit from "../Dashboard/User/UserEdit";

const Core = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <CoreTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={PageView1} />
            <Route path="/sign-up" component={PageView2} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={UserList} />
            <Route exact path="/user/:id/edit" component={UserEdit} />
            <Route
              exact
              path="/test/case/visual-perception"
              component={VisualPerceptionList}
            />
            <Route
              path="/test/case/visual-perception/create"
              component={VisualPerceptionCreate}
            />
            <Route
              exact
              path="/test/case/visual-perception/task/:id"
              component={VisualPerceptionDetails}
            />
            <Route
              path="/test/case/visual-production/create"
              component={VisualProductionCreate}
            />
            <Route
              exact
              path="/test/case/visual-perception/task/:id/edit"
              component={VisualPerceptionEdit}
            />
            <Route
              exact
              path="/test/case/visual-production/task/:id/edit"
              component={VisualProductionEdit}
            />
            <Route
              exact
              path="/test/case/visual-production/task/:id"
              component={VisualProductionDetails}
            />
            <Route
              path="/test/case/visual-reception/create"
              component={VisualReceptionCreate}
            />
            <Route
              exact
              path="/test/case/visual-reception/task/:id"
              component={VisualReceptionDetails}
            />
            <Route
              exact
              path="/test/case/visual-reception/task/:id/edit"
              component={VisualReceptionEdit}
            />
            <Route exact path="/tests" component={TestList} />
            <Route exact path="/test/cases" component={TestCaseList} />
            <Route path="/test/create" component={TestCreate} />
            <Route path="/test/:id/details" component={TestDetails} />
            <Route component={NotFound} />
          </Switch>
        </CoreTemplate>
      </BrowserRouter>
    </Provider>
  </>
);

export default Core;
