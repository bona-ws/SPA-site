import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class ButtonComponent extends Component {
  render() {
    return (
      <Button
        className="button"
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.ButtonName}
      </Button>
    );
  }
}

export default ButtonComponent;
