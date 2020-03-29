import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { user } = state.authentication;
  return { user };
};

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: this.props.user.data
    };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const { userSession } = this.state;

    return (
      <div>
        {userSession.map(user => (
          <h1 key={user.email}>Hello, {user.username}</h1>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
