import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogLists from "./component/BlogLists";
import Read from "./component/Read";

export class Blog extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={BlogLists} />

          <Route path="/category/:category" component={BlogLists} />

          <Route path="/read/:title/" component={Read} />
        </Switch>
      </Router>
    );
  }
}

export default Blog;
