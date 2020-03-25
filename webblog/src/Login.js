import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

import { increment } from "./redux/action";
import "./css/login.css";

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: addCount => dispatch(increment(addCount))
  };
};

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  increment = addCount => {
    this.props.increment(5);
  };

  render() {
    return (
      <div className="section">
        <Button onClick={this.increment}>+</Button>
        <h2>Login Page {this.props.counter}</h2>
        <form>
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
