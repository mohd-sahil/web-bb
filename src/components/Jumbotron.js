import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components"; 
import bgimage from "../assets/bg-img/33.jpg";
import logo from "../assets/bandbazar/BandBazaar-logo.png";

const Styles = styled.div`
  .jumbo {
    text-align:center;
    width:100%;
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

  .responsive{
    max-width:100%;
    max-height:100%;
    position:relative;  
  }
`;

 const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
        <img src={logo} alt="" className="responsive" /> 
    </Jumbo>
  </Styles>
);

export default Jumbotron; 
