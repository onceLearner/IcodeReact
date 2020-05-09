import React, { useState } from "react";
import { GrInProgress, GrCheckboxSelected, GrPlay } from "react-icons/gr";
import { BsPlay } from "react-icons/bs";

import HashLoader from "react-spinners/HashLoader";
import "./problem.scss";

import Select from "react-dropdown-select";

/**
 *
 * @param {userCode,userLang,actualProblem,darkmode} probs
 *
 */

function CodeHandler(probs) {
  //userCode, userLang, actualProblem

  const [CodeStatus, setCodeStatus] = useState("");

  const waitIcon = (
    <div>
      {" "}
      <h4> Execution en cours...</h4>
      <div className="ml-5 px-3">
        <HashLoader
          size={35}
          className="px-4"
          color={"#22cc99"}
          loading={2}
        ></HashLoader>
      </div>
    </div>
  );
  const SuccessIcon = <GrCheckboxSelected size="23px"></GrCheckboxSelected>;
  const codeCorrect = (
    <div>
      <h4 className="text-success">
        {" "}
        Congratulation ! your code passes{" "}
        <GrCheckboxSelected size="23px"></GrCheckboxSelected>
      </h4>
    </div>
  );
  const codeFalse = (
    <h5>
      Code Status: <h4 className="text-danger">Wrong Code</h4>{" "}
    </h5>
  );

  const handleClick = () => {
    setCodeStatus(waitIcon);
    const EncodedUserCode = encodeURIComponent(probs.userCode); //  to encode only the code not the entire url;
    console.log(EncodedUserCode);
    const localBack = "http://localhost:8443/v6";
    const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/v4";
    const RemoteAmazon =
      "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/v6";

    fetch(RemoteAmazon, {
      method: "post",
      body: `lang=${probs.userLang}&code=${EncodedUserCode}&in=${probs.actualProblem.in}&ref=${probs.actualProblem.ref}`,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
      .then((respons) => {
        return respons.json(); // because i-v sent data as map
      })

      .then((data) => {
        if (data.codeStatus === "not") setCodeStatus(codeFalse);
        else setCodeStatus(codeCorrect);
      });
  };

  return (
    <div>
      <button
        className="btn btn-success float-right mr-5 "
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
