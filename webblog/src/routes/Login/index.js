import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../component/Button";
import { login } from "../../_action/login";
import "../../assets/css/login.css";

const mapStateToProps = state => {
  const { loggingIn, loggedIn } = state.authentication;
  return { loggingIn, loggedIn };
};

const mapDispatchToProps = {
  login
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false
    };
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
      this.setState({ submitted: false });
    }
  };

  render() {
    const { submitted, email, password } = this.state;

    return (
      <div className="section">
        <h2>Welcome Back</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {submitted && !email && <p>Email is required</p>}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          {submitted && !password && <p>Password is required</p>}
          <Button ButtonName={"Login"} type={"submit"} />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
