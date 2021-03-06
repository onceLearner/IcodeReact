import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Titillium Web:300,400,700",
      "sans-serif",
      "Abel",
      "Kalam:wght@300;400",
      "Kanit:ital,wght@1,200",
      "Source+Sans+Pro:wght@300",
      "Quicksand:wght@300",
      "Khula:wght@300",
    ],
  },
});

ReactDOM.render(
  <BrowserRouter basename="/src/App.js">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
