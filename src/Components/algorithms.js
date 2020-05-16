import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { BsStar } from "react-icons/bs";
import Nav from "./nav";
import "./algo.scss";

export default function Algorithms(props) {
  const [arrayProblems, setArrayProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  const localBack = "http://localhost:8443/getP";
  const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/v4";
  const RemoteAmazon =
    "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/getP";
  var arrayProblemitems = [];
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RemoteAmazon);
      const data = await response.json();
      await setArrayProblems(data);

      setLoading(false);
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  arrayProblems.forEach((element) => {
    arrayProblemitems.push(
      <div id="algoMainGrid">
        <div className="border rounded shadow-sm col-lg-11 py-3 mt-3">
          <span
            className="border-left px-2"
            style={{
              fontFamily: "Poiret one ",
              fontSize: "35px",
              color: "black",
            }}
          >
            {element.label}
          </span>{" "}
          <br></br>
          easy <BsStar></BsStar>
          <button
            type="button"
            className="btn btn-outline-success  float-right"
            onClick={(value) => {
              localStorage.setItem("actualProblem", JSON.stringify(element));
              console.log(JSON.parse(localStorage.getItem("actualProblem")));
              window.location.replace("/user");
            }}
          >
            Solve the Challenge
          </button>
        </div>
      </div>
    );
  });
  console.log();

  const iconLoading = loading ? <ClipLoader> </ClipLoader> : null;

  return (
    <div className="algoMainCont">
      <Nav></Nav>

      <div>{arrayProblemitems}</div>
      <div className="text-center">{iconLoading}</div>
    </div>
  );
}
