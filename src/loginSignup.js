import React, { useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import { Route } from "react-router-dom";

function LoginSingup() {
  const [signup, setSignup] = useState(0);
  const [login, setLogin] = useState(0);
  const [Toggler, setToggler] = useState(1);
  const DarkOrInfo = Toggler ? "text-dark h5  " : "text-info  h5 py-1  ";
  const DarkOrInfo1 = !Toggler ? "text-dark h5  " : "text-info h5 py-1   ";

  var Reda = Toggler ? FiToggleRight : FiToggleLeft; // toggle betwwen them using state managent only
  var style = { backgroundColor: "#212529" };
  return (
    <Route path="/auth">
      <div className="loginSignup ">
        <div className="text-center mt-3 mb-3" id="loginSignupLabel">
          <span className={DarkOrInfo}>login</span>
          <Reda
            size="2em"
            className="mr-2 ml-2 "
            onClick={() => {
              setLogin(login + 1);
              setSignup(signup + 1);
              setToggler(login % 2);
            }}
          >
            {" "}
            sf
          </Reda>
          <span className={DarkOrInfo1}>Signup</span>
        </div>

        <Signup signup={signup} />
        <Login login={login} />
      </div>
    </Route>
  );
}
export default LoginSingup;
