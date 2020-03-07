import React, { Component } from "react";
import Header from "./component/Header";
import Blog from "./Blog";
import Footer from "./component/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
