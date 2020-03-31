import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logout from "../_action/logout";
import "../assets/css/header.css";
import logo from "../assets/img/logo.PNG";

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
          <img src={logo} alt="Logo" width="120px" />
        </Link>
        <Link to="/category/life">Life</Link>
        <Link to="/category/explore">Explore</Link>
        <Link to="/category/work">Work</Link>
        <Link to="/category/culture">Culture</Link>
        {loggedIn ? (
          <div className="menu-dropdown">
            <Link to="#!" id="show-menu">
              Account
            </Link>
            <ul className="menu-list">
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/write">Write</Link>
              </li>
              <li>
                <Link to="help">Help</Link>
              </li>
              <li>
                <Link to="#!" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login"> | Login | </Link>
            <Link to="/register"> | Register | </Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
