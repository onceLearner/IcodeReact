import React, { useState } from "react";
import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import LoginSingup from "./loginSignup";
import Interface from "./interface";
import Landing from "./landing";
import Algorithms from "./Components/algorithms";

function App() {
  return (
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
      <Route exact path="/algo">
        <Algorithms />
      </Route>
    </Switch>
  );
}
export default App;
