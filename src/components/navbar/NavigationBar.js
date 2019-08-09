import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import style from "./navbar.css";
import logo from "../../assets/bandbazar/BandBazaar-logo-small.png";
import Logincompon from "./login/Logincompon";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <div>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <div className="img">
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <div className="login">
                <Nav.Link>
                  <Link to="/#">
                    <Logincompon />
                  </Link>
                </Nav.Link>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </div>
);
