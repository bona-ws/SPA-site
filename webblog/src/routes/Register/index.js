import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../component/Button";
import "../../assets/css/register.css";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        username: ""
      },
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
    const { username, email, password } = this.state;

    if (username && email && password) {
      // this.props.register(username, email, password);
      this.setState({
        submitted: false,
        username: "",
        email: "",
        password: ""
      });
    }
  };

  render() {
    const { username, email, password, submitted } = this.state;

    return (
      <div className="section">
        <h2>
          Register here and
          <br /> Join us
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Make username"
            value={username}
            onChange={this.handleChange}
          />
          {submitted && !username && <p>Username is required</p>}
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

export default Register;
