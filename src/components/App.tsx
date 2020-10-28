import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  RandomJoke,
  BespokeJoke,
  EndlessJoke,
  Footer,
} from "../components/index";
import Nav from "./Nav";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app">
      <div>Chuck Norris Joke Generator</div>
      <Router>
        <Nav />

        <Switch>
          <Redirect exact from="/" to="/random" />
          <Route exact path="/random" component={RandomJoke} />
          <Route exact path="/bespoke" component={BespokeJoke} />
          <Route exact path="/endless" component={EndlessJoke} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
