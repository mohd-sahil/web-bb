import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import bgimage from "../assets/bg-img/33.jpg";
import logo from "../assets/bandbazar/BandBazaar-logo.png";

const Styles = styled.div`
  .jumbo {
    background: url(${bgimage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .content {
    margin-left: 35%;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container className="content">
        <img src={logo} alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="app-thumbnail mb-80" />
            </div>
          </div>
        </div>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
