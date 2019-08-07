//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import "./custom.css";
import Slideshow from "./Slideshow";
import slide1 from "./assets/slide11.jpg";
import slide2 from "./assets/slide22.jpg";
import slide3 from "./assets/slide33.jpg";
import slide4 from "./assets/slide44.png";
import slide5 from "./assets/slide55.jpg";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5];

//===========================================
// APP COMPONENT
//===========================================
class Everything extends Component {
  render() {
    return (
      <div className={s.container}>
        <h1 className="text">featured artists</h1>

        <div className={s.main}>
          <Slideshow slides={slides} />
        </div>
      </div>
    );
  }
}

export default Everything;
