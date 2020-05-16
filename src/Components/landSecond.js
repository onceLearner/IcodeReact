import React from "react";
import "./landSecond.scss";

export default function LandSecond(probs) {
  return (
    <div className="landSecondMainCont ">
      <div className="" id="flexed">
        <div id="landSecondImg">
          <picture>
            <source
              media="(max-width:799px )"
              srcset={require("../media/icodeforMobile.png")}
            />

            <img
              alt="the user interface"
              media="(min-width:800px)"
              src={require("../media/icodeInterface3.png")}
              id="imgLandSecond"
            ></img>
          </picture>
        </div>
        <div className="mt-4 py-4">
          <p
            className="mt-4 py-4 text-center"
            style={{
              fontFamily: "Source Sans Pro",
              fontSize: "30px",
              color: "#fff",
            }}
          >
            {" "}
            Choose a problem, select your favourite language enjoy write your
            code !{" "}
          </p>{" "}
          <p className="text-light text-center" style={{ fontSize: "17px" }}>
            Get better in Coding through problem solving , Challenging your
            friends and taking part in competitions !
          </p>
        </div>
      </div>
    </div>
  );
}
