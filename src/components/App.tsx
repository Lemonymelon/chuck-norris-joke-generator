import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RandomJoke, BespokeJoke, EndlessJoke } from "../components/index";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>title</h1>
      <Router>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/random" />
          <Route exact path="/random" component={RandomJoke} />
          <Route exact path="/bespoke" component={BespokeJoke} />
          <Route exact path="/endless" component={EndlessJoke} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
