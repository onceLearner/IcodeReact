import React from "react";
import { Route } from "react-router-dom";
import LandMain from "./Components/landMain";
import Navbar from "./Components/navbar";
import LandSecond from "./Components/landSecond";
import LandThird from "./Components/landThird";
import Footer from "./Components/footer";

function Langing(props) {
  return (
    <div style={{ overflow: "hidden" }}>
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
      <div>
        <LandThird></LandThird>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Langing;
