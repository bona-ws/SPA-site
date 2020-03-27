import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logout from "../_action/logout";
import "../css/header.css";

const mapStateToProps = state => {
  const { loggedIn } = state.authentication;
  return { loggedIn };
};

const mapDispatchToProps = {
  logout: logout
};

export class Header extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    const loggedIn = this.props.loggedIn;
    const logout = this.logout;
    return (
      <div className="header">
        <Link to="/">
          <img
            src="https://geeksjapan.asia/assets/img/logo.png"
            alt="Logo"
            width="120px"
          />
        </Link>
        <Link to="/category/life">Life</Link>
        <Link to="/category/explore">Explore</Link>
        <Link to="/category/work">Work</Link>
        <Link to="/category/culture">Culture</Link>
        {loggedIn ? (
          <Button onClick={logout}> | Logout | </Button>
        ) : (
          <Link to="/login"> | Login | </Link>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
