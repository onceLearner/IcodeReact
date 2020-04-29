import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { GrInProgress, GrCheckboxSelected } from "react-icons/gr";
import AceEditor from "react-ace";
import "./problem.scss";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";

function Problem() {
  const [userCode, setUserCode] = useState("");
  const [CodeStatus, setCodeStatus] = useState("");

  var userCodeJson = { code: userCode };
  console.log(userCodeJson);

  const waitIcon = (
    <div>
      {" "}
      <h4>
        {" "}
        wait .... <GrInProgress
          size="25px"
          className="ml-4"
        ></GrInProgress>{" "}
      </h4>{" "}
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
  const codeFalse = <h4 className="text-danger">Wrong Code</h4>;

  const handleClick = () => {
    setCodeStatus(waitIcon);
    console.log(userCodeJson);
    fetch("http://localhost:8081/v1", {
      method: "post",
      body: userCode,
      headers: { "content-type": "application/json" },
    }).then((data) => {
      data.text().then((text) => {
        console.log(text);
        if (text === "wrong code") setCodeStatus(codeFalse);
        else setCodeStatus(codeCorrect);
      });
    });
  };

  return (
    <Route exact path="/interface">
      <div className="container1 mt-2 px-3">
        <h3> probleme 1:</h3>
        <div className="container1">
          <p>
            {" "}
            Ecrire une fonction qui affiche le message :{" "}
            <code>hello world </code>{" "}
          </p>
        </div>
        <div className="text-container">
          <div className="EditorContainer mr-3 mb-3">
            <AceEditor
              mode="c_cpp"
              theme="xcode"
              height="300px"
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
    </Route>
  );
}
export default Problem;

// #include<stdio.h>

//             int main() {
//             int var;
//             scanf("%d",&var);
//             printf("%d",var);
//             }
