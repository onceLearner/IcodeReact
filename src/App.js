import React, { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import { Route, Switch, Router } from "react-router-dom";
import LoginSingup from "./loginSignup";
import Interface from "./interface";
import Landing from "./landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path="/auth">
          <LoginSingup />
        </Route>
        <Route exact path="/user">
          <Interface />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
