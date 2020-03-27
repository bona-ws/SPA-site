import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../helper/history";
import PrivateRoute from "./PrivateRoute";

import Header from "../component/Header";
import Footer from "../component/Footer";
import BlogLists from "./Blog/BlogLists";
import Read from "./Blog/Read";
import Login from "./Login";
import Admin from "./Admin";

export class Routes extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      // this.props.clearAlerts();
    });
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <PrivateRoute path="/admin" component={Admin} />
          <Route exact path="/" component={BlogLists} />
          <Route path="/category/:category" component={BlogLists} />
          <Route path="/read/:title/" component={Read} />
          <Route path="/login" component={Login} />
          <Route from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
