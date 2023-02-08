import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Layout from "./screen/Layout";
import styled from "styled-components";
import img from "./assets/background-fruits.jpg";

export const BackgroundImage = styled.div`
  background-color: pink;
  height: 100vh;
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Opacity = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
`;

export const Button = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #ffffff;
  }
  font-size: 50px;
  &:hover {
    opacity: 0.7;
  }
`;

function App() {
  return (
    <div className="App">
      <BackgroundImage>
        <Opacity>
          <Layout>
            <Button to="/fruits">
              Clique aqui para verificar as frutas disponíveis
            </Button>
          </Layout>
        </Opacity>
      </BackgroundImage>
    </div>
  );
}

export default App;
