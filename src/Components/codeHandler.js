import React, { useState } from "react";
import { GrInProgress, GrCheckboxSelected, GrPlay } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";
import HashLoader from "react-spinners/HashLoader";
import "./problem.scss";

import {
  FadeLoader,
  PacmanLoader,
  BarLoader,
  SyncLoader,
  CircleLoader,
  GridLoader,
} from "react-spinners";

/**
 *
 * @param {userCode,userLang,actualProblem,darkmode} probs
 *
 */

function CodeHandler(probs) {
  //userCode, userLang, actualProblem

  const [CodeStatus, setCodeStatus] = useState("");
  const [codeErrors, setCodeErrors] = useState("");

  const waitIcon = (
    <div className="ml-4 mt-3">
      {" "}
      processing ...
      <GridLoader className="ml-3" />
    </div>
  );
  const SuccessIcon = <GrCheckboxSelected size="23px"></GrCheckboxSelected>;
  const codeCorrect = (
    <div>
      <h4 className="text-success">
        {" "}
        Correct <GrCheckboxSelected size="23px"></GrCheckboxSelected>
      </h4>
    </div>
  );

  const handleClick = () => {
    setCodeStatus(waitIcon);

    const EncodedUserCode = encodeURIComponent(probs.userCode); //  to encode only the code not the entire url;
    const EncodedInput = encodeURIComponent(probs.actualProblem.input); //  to encode only the code not the entire url;
    const EncodedRef = encodeURIComponent(probs.actualProblem.ref); //  to encode only the code not the entire url;

    console.log(EncodedUserCode);
    const localBack = "http://localhost:8443/v6";
    const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/v4";
    const RemoteAmazon =
      "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/v6";

    fetch(RemoteAmazon, {
      method: "post",
      body: `lang=${probs.userLang}&code=${EncodedUserCode}&in=${EncodedInput}&ref=${EncodedRef}`,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
      .then((respons) => {
        return respons.json(); // because i-v sent data as map
      })

      .then((data) => {
        console.log(data);

        if (data.codeStatus === "not") {
          setCodeStatus(codeFalse);
          setCodeErrors(data.errors);
          setCodeErrors(data.errors);
          console.log(codeErrors);
        } else setCodeStatus(codeCorrect);
      });
  };
  const codeFalse = (
    <div className="" style={{ width: "200px" }}>
      <p className="ml-3 mt-4">
        {" "}
        solution not working
        <a
          class="btn btn-outline-danger"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          show errors
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">{codeErrors}</div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className="btn btn-success  ml-3 "
        type="submit"
        onClick={handleClick}
      >
        Run
        <BsPlay className="  h5 mt-2" />
      </button>
      <div className="con">{CodeStatus}</div>
    </div>
  );
}
export default CodeHandler;
