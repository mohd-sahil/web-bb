import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/home/Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/navbar/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Everything from "../src/slider/Everything";
import Youtube from "../src/youtube/Youtube";
import Login from "../src/components/navbar/login/pages/Login";
import Signup from "../src/components/navbar/login/pages/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <NavigationBar />

            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />

                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
