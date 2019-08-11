import React, { Component } from "react";
import style from "../login/login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Logincompon extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    let searchForm = this.state.showForm ? (
      <div className="box" id="grid">
        <ul>
          <h1>Artist</h1>

          <button>
            <Link to="/login" href="./events.html">
              login
            </Link>
          </button>

          <button>
            <Link to="/signup" href="./events.html">
              signup
            </Link>
          </button>
        </ul>
        <ul>
          <h1>Band</h1>
          <button>
            <Link to="/login" href="./events.html">
              login
            </Link>
          </button>
          <button>
            <Link to="/signup" href="./events.html">
              signup
            </Link>
          </button>
        </ul>
        <ul>
          <h1>studio</h1>

          <button>
            <Link to="/login" href="./events.html">
              login
            </Link>
          </button>
          <button>
            <Link to="/signup" href="./events.html">
              signup
            </Link>
          </button>
        </ul>

        <ul>
          <h1>crew-member</h1>

          <button>
            <Link to="/login" href="./events.html">
              login
            </Link>
          </button>
          <button>
            <Link to="/signup" href="./events.html">
              signup
            </Link>
          </button>
        </ul>

        <ul>
          <h1>Fan</h1>

          <button>
            <Link to="/login" href="./events.html">
              login
            </Link>
          </button>
          <button>
            <Link to="/signup" href="./events.html">
              signup
            </Link>
          </button>
        </ul>
      </div>
    ) : (
      ""
    );

    return (
      <div className="megamenu">
        <div onClick={this.showForm.bind(this)}>Login/Signup</div>

        {searchForm}
      </div>
    );
  }
}

export default Logincompon;
