import React, { useState, useEffect } from "react";
import { GrInProgress, GrCheckboxSelected, GrStatusGood } from "react-icons/gr";
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
  const [codeErrors, setCodeErrors] = useState(null);
  const [fetchData, setFetchData] = useState(null);

  const waitIcon = (
    <div className="ml-4 mt-3">
      {" "}
      processing ...
      <GridLoader className="ml-3" />
    </div>
  );

  const codeCorrect = (
    <div>
      <h4 className="text-success">
        {" "}
        Correct{" "}
        <GrStatusGood size="23px" style={{ fill: "green" }}></GrStatusGood>
      </h4>
    </div>
  );

  const codeFalse = (
    <div className="" style={{ width: "200px" }}>
      <p className="ml-2 mt-4 text-error"> solution not working </p>
      <a
        className="btn btn-outline-danger"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        show errors
      </a>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">{codeErrors}</div>
      </div>
    </div>
  );

  //------ it is mandatory to reRender the page after we update the state  codeErrors;
  useEffect(() => {
    if (probs.userCode !== "") handleClick();
  }, [codeErrors]);

  //--- function to handle to the run button
  const handleClick = () => {
    setCodeStatus(waitIcon);

    const EncodedUserCode = encodeURIComponent(probs.userCode); //  to encode only the code not the entire url;
    const EncodedInput = encodeURIComponent(probs.actualProblem.input); //  to encode only the code not the entire url;
    const EncodedRef = encodeURIComponent(probs.actualProblem.ref); //  to encode only the code not the entire url;

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
        if (data.codeStatus === "not") {
          setCodeErrors(data.errors);
          setCodeStatus(codeFalse);
        } else setCodeStatus(codeCorrect);
      });
  };

  return (
    <div>
      <button
        className="btn btn-success  ml-1 "
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
