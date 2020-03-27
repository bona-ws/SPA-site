import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";

import { login } from "../../_action/login";
import "../../css/login.css";

const mapStateToProps = state => {
  const { loggingIn, loggedIn } = state.authentication;
  return { loggingIn, loggedIn };
};

const mapDispatchToProps = {
  login: login
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitted: true, email: "", password: "" });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  };

  render() {
    const { submitted, email, password } = this.state;

    return (
      <div className="section">
        <h2>Login Page</h2>
        <h2>is Login {this.props.loggedIn ? "true" : "false"}</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          {submitted && !email && <p>Email is required</p>}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          {submitted && !password && <p>Password is required</p>}
          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
