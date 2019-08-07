import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import bgimage from "../../assets/bg-img/54.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${bgimage}) no-repeat bottom;
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

export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container className="content">
        <h1>Bandbazaar</h1>
        <p>
          Bandbazaar.com is an online platform that provides marketing
          <br />
          tools and industry opportunities for emerging musicians,
          <br />
          artists, bands, event manager’s photographers, graphic
          <br />
          designers, sound engineers, and band crew members to build
          <br />
          their careers. We’ve connected artists to venues, festivals,
          <br />
          brands, publishers, labels, and the fans themselves.
          <br />
          Bandbazaar.com provide a social networking platform for bands
          <br />
          to connect to their community
        </p>
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
