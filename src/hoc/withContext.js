import React from "react";
import CoreContext from "../context";

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <CoreContext.Consumer>
        {(context) => <Component {...props} context={context} />}
      </CoreContext.Consumer>
    );
  };
};

export default withContext;
