import React from "react";
import { withRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import CoreContext from "../context";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/CoreTheme";

const CoreTemplate = ({ children }) => (
  <div>
    <CoreContext.Provider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CoreContext.Provider>
  </div>
);

export default withRouter(CoreTemplate);
