import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";

import history from "../helper/history";
import PrivateRoute from "./PrivateRoute";
import { alertClear } from "../modules/action/alert";

import Header from "../component/Header";
import Footer from "../component/Footer";
import BlogLists from "./Blog/BlogLists";
import Read from "./Blog/Read";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

export class Routes extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlert();
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <Header />

        {alert.message && (
          <Alert severity={alert.severity}>{alert.message}</Alert>
        )}

        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={BlogLists} />
          <Route path="/category/:category" component={BlogLists} />
          <Route path="/read/:title/" component={Read} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route from="*" to="/" />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = {
  clearAlert: alertClear
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
