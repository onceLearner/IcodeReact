import React from "react";
import ListProblems from "./listProblems";
import { RiLightbulbLine } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";

var Style = {
  fontFamily: "monospace",
  backgroundColor: "#343a40 ",
};
var font = { fontFamily: "kalam", color: "#898ea0" };

/**
 *
 * @param {actualProblem} probs
 */
function ExplainCode(probs) {
  return (
    <div className="text-light mt-4 mb-3">
      <div className="mt-5 mb-5 text-center   border-bottom ">
        <h3 style={{ fontFamily: "Abel" }}>
          problem {probs.actualProblem.idP} :{" "}
          <i style={{ fontFamily: "kanit" }}> {probs.actualProblem.label}</i>{" "}
        </h3>
      </div>
      <div className="mt-4 ">
        <h5 className="mt-4" style={font}>
          Explication:
        </h5>
        <p
          className=" border rounded border-dark col-10 py-3  mt-2"
          style={Style}
        >
          {probs.actualProblem.text}
        </p>
      </div>
      <div>
        <h5 style={font}>Expected Input :</h5>
        <p className=" border rounded  border-dark col-10 py-3 " style={Style}>
          {probs.actualProblem.input === ""
            ? "no input"
            : probs.actualProblem.input}
        </p>
      </div>
      <div>
        <h5 style={font}>Expected output :</h5>
        <p className=" border rounded border-dark col-10 py-3 " style={Style}>
          {probs.actualProblem.ref}
        </p>
      </div>
      <div className="text-center">
        {" "}
        <p>time to code</p> <AiFillCode />
      </div>
    </div>
  );
}
export default ExplainCode;