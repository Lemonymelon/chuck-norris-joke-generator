/* eslint-disable react/jsx-indent */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from "react";
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from "react-router-dom";
import { RandomJoke, BespokeJoke, EndlessJoke } from "../components/index";

const RouterProvider = () => (
    <Router>
        <Switch>
            <Redirect exact from="/" to="/random" />
            <Route exact path="/random" component={RandomJoke} />
            <Route exact path="/bespoke" component={BespokeJoke} />
            <Route exact path="/endless" component={EndlessJoke} />
        </Switch>
    </Router>
);

export default RouterProvider;
