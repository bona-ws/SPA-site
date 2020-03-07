import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "../css/header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="..">
          <img
            src="https://geeksjapan.asia/assets/img/logo.png"
            alt="Logo"
            width="120px"
          />
        </a>
        <Button href="/category/life" color="secondary">
          Life
        </Button>
        <Button href="/category/explore" color="secondary">
          Explore
        </Button>
        <Button href="/category/work" color="secondary">
          Work
        </Button>
        <Button href="/category/culture" color="secondary">
          Culture
        </Button>
        <Button href="/category/learn" color="secondary">
          Learn
        </Button>
      </div>
    );
  }
}

export default Header;
