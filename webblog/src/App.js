import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import BlogLists from "./component/BlogLists";
import Read from "./component/Read";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Header />
          {/* <Switch> */}
          <Route exact path="/" component={BlogLists} />

          <Route path="/category/:category" component={BlogLists} />

          <Route path="/read/:title/" component={Read} />
          {/* </Switch> */}
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
