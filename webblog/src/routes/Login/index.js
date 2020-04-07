import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../component/Button";
import { login } from "../../modules/action/login";
import "../../assets/css/login.css";

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
    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (email && password) {
      this.props.login(email, password);
      this.setState({ submitted: false, email: "", password: "" });
    }
  };

  render() {
    const { email, password, submitted } = this.state;

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

const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn,
  loggedIn: state.authentication.loggedIn
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
