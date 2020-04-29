import React, { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import { Route, Switch } from "react-router-dom";
import LoginSingup from "./loginSignup";
import Interface from "./interface";

function App() {
  return (
    <Switch>
      <Route exact path="/auth">
        <LoginSingup />
      </Route>
      <Route exact path="/user">
        <Interface />
      </Route>
    </Switch>
  );
}
export default App;
