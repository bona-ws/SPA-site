import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export class Header extends Component {
  render() {
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
      </div>
    );
  }
}

export default Header;
