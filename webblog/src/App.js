import React, { Component, Fragment } from "react";
import { alertClear } from "./modules/action/alert";
import Routes from "./routes";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes />
      </Fragment>
    );
  }
}

export default App;
