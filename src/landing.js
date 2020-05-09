import React from "react";
import { Route } from "react-router-dom";
import LandMain from "./Components/landMain";
import Navbar from "./Components/navbar";
import LandSecond from "./Components/landSecond";

function Langing(props) {
  return (
    <div>
      <div className="" id="bgContainer">
        <div className="navbarCont">
          <Navbar></Navbar>
        </div>
        <div className="">
          <LandMain></LandMain>
        </div>
      </div>
      <div>
        <LandSecond></LandSecond>
      </div>
    </div>
  );
}

export default Langing;
