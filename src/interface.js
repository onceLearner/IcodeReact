import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Problem from "./Components/problem";
import * as serviceWorker from "./serviceWorker";

function Interface(props) {
  return (
    <Route exact path="/interface">
      <div>
        <Problem></Problem>
      </div>
    </Route>
  );
}
export default Interface;
