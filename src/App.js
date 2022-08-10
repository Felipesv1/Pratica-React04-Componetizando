import React, { Component } from "react";
import Header from "../src/Components/Header.js";
import Main from "../src/Components/Main.js";
import Footer from "../src/Components/Footer.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main nome="Felipe" idade="18 Anos" estudando="React" />
        <Footer />
      </>
    );
  }
}
