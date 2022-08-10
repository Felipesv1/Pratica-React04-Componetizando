import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  text-align:center;
  font-family: 'Roboto', sans-serif;

}

`;

export default class Header extends Component {
  render() {
    return (
      <>
        <Globalstyle />
        <h1>Comida Favorita</h1>
      </>
    );
  }
}
