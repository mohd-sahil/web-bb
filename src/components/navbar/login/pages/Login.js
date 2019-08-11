import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import style from "../pages/form.css";

class Login extends Component {
  render() {
    return (
      <Router>
        <div className="form">
          <div className="FormCenter">
            <form
              onSubmit={this.handleSubmit}
              className="FormFields"
              onSubmit={this.handleSubmit}
            >
              <h1>Login form</h1>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;
