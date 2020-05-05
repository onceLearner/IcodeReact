import React, { useState } from "react";
import { GrInProgress, GrCheckboxSelected } from "react-icons/gr";
import AceEditor from "react-ace";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "./navbar";
import ListProblems from "./listProblems";

import "./problem.scss";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";
import Select from "react-dropdown-select";

function Problem() {
  const [userCode, setUserCode] = useState("");
  const [CodeStatus, setCodeStatus] = useState("");
  const [userLang, setUserLang] = useState("c");

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

  const Languages = [
    { label: "py", value: 1 },
    { label: "java", value: 2 },
    { label: "c", value: 3 },
  ];

  const handleClick = () => {
    setCodeStatus(waitIcon);
    const EncodedUserCode = encodeURI(userCode);
    const localBack = "http://localhost:8081/v4";
    const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/v4";
    const RemoteAmazon =
      "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/v6";

    fetch(RemoteAmazon, {
      method: "post",
      body: `lang=${userLang}&code=${EncodedUserCode}&in=3&ref=3`,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    }).then((data) => {
      console.log(data);
      data.text().then((text) => {
        // setRequestStatus(false);
        console.log(text);
        if (text === "wrong code") setCodeStatus(codeFalse);
        else setCodeStatus(codeCorrect);
      });
    });
  };

  return (
    <div style={{ backgroundColor: "#212529" }}>
      <Navbar></Navbar>
      <div className="container2 mt-2 px-3 text-light">
        <h3 className="mt-3"> probleme 1:</h3>

        <div className="container text-light">
          <ListProblems></ListProblems>
        </div>
        <div className="text-container">
          <div className="selectContainer text-dark">
            <Select
              options={Languages}
              value={userLang}
              onChange={(newvalue) => {
                setUserLang(newvalue[0].label);
              }}
              className=""
              placeholder="language"
            />
          </div>
          <div className="EditorContainer mr-3 mt-4 mb-3">
            <AceEditor
              mode={userLang}
              theme="solarized_dark"
              height="300px"
              width="auto"
              value={userCode}
              onChange={(newValue) => {
                setUserCode(newValue);
              }}
            />
          </div>
          <button
            className="btn btn-outline-primary float-right mr-3"
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
          {CodeStatus}
        </div>
      </div>
    </div>
  );
}
export default Problem;

// #include<stdio.h>

//             int main() {
//             int var;
//             scanf("%d",&var);
//             printf("%d",var);
//             }
