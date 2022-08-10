import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Roboto', sans-serif;

}
body{
  margin:0 auto;
  max-width:600px;
  margin-top:150px;
  background:beige;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FoiHEO2VJWO8%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoiHEO2VJWO8&tbnid=-4BLakxDQea8TM&vet=12ahUKEwjXksHlpbv5AhVcG7kGHeNWC4IQMygDegUIARCCAg..i&docid=vD4--X-VfxyDTM&w=1280&h=720&q=escondidinho%20de%20carne%20moida&client=opera&ved=2ahUKEwjXksHlpbv5AhVcG7kGHeNWC4IQMygDegUIARCCAg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 5px;
  border: 2px solid Azure;
  border-radius: 10px;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 100%;
    border: 2px solid Beige;
  }

  h2 {
    font-family: "Play", sans-serif;
  }
`;

const Informacao = styled.div`
  background: azure;
  padding: 10px;
  opacity: 0.8;
  margin-top: 10px;
`;

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Globalstyle />
        <img
          src={"https://i.ytimg.com/vi/oiHEO2VJWO8/maxresdefault.jpg"}
          alt="Foto perfil"
        />
        <Informacao>
          <h2>Nome : {this.props.nome}</h2>
          <h2>Idade : {this.props.idade}</h2>
          <h2>Estudando : {this.props.estudando}</h2>
        </Informacao>
      </Container>
    );
  }
}
