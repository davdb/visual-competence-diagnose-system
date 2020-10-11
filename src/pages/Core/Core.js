import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoreTemplate from "../../templates/CoreTemplate";
import Home from "../Home/Home";
import PageView1 from "../Home/PageView1";
import PageView2 from "../Home/PageView2";
import NotFound from "../HTTPExceptions/NotFound";

const Core = () => (
  <>
    <BrowserRouter>
      <CoreTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page-view-1" component={PageView1} />
          <Route path="/page-view-2" component={PageView2} />
          <Route component={NotFound} />
        </Switch>
      </CoreTemplate>
    </BrowserRouter>
  </>
);

export default Core;
