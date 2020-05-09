import React, { useState, useEffect } from "react";
import { GrInProgress, GrCheckboxSelected, GrCode } from "react-icons/gr";
import { DiPython, DiJava, DiCodeBadge } from "react-icons/di";
import AceEditor from "react-ace";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "./navbar";

import ExplainProblem from "./explainProblem";
import CodeHandler from "./codeHandler.js";

import "./problem.scss";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-dracula";

import Select from "react-dropdown-select";
const py = <DiPython></DiPython>;

function Problem() {
  const [userCode, setUserCode] = useState("");
  const [userLang, setUserLang] = useState("c");

  const Languages = [
    {
      name: "py",
      label: (
        <span>
          {" "}
          python <DiPython />{" "}
        </span>
      ),
      value: 1,
    },
    {
      name: "java",
      label: (
        <span>
          {" "}
          java <DiJava />
        </span>
      ),
      value: 2,
    },
    { name: "c", label: " c / c++ ", value: 3 },
  ];

  const [arrayProblems, setArrayProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualProblem, setsctualProblem] = useState(4);

  const localBack = "http://localhost:8443/getP";
  const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/v4";
  const RemoteAmazon =
    "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/getP";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RemoteAmazon);
      const data = await response.json();
      await setArrayProblems(data);
      setsctualProblem(data[0]);

      setLoading(false);
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  var darkmode = { backgroundColor: "#fff" };

  return (
    <div className="problemMainDiv" style={darkmode}>
      <div className="listProblemsCont container    mt-4 ">
        {loading ? (
          "loading ..."
        ) : (
          <div className="col-md-5">
            <Select
              width=""
              placeholder="Choose a problem"
              options={arrayProblems}
              value={actualProblem}
              className="text-dark bg-light"
              onChange={(newValue) => {
                setsctualProblem(newValue[0]);
                console.log(actualProblem);
              }}
            />
          </div>
        )}
      </div>
      <div className="EditorTextCont ">
        <div className="text-container container">
          <ExplainProblem actualProblem={actualProblem} />
        </div>
        <div className="editorLangCont">
          <div className="selectContainer text-dark bg-light  float-right mr-5 px-3">
            <Select
              options={Languages}
              value={userLang}
              onChange={(newvalue) => {
                setUserLang(newvalue[0].name);
              }}
              className=" mr-4"
              placeholder={" language </>"}
            />
          </div>
          <div className="EditorContainer mr-3 mt-4 ml-3 mb-3  ">
            <AceEditor
              className="border  border-white"
              mode={userLang}
              theme="dracula"
              height="300px"
              value={userCode}
              onChange={(newValue) => {
                setUserCode(newValue);
              }}
            />
          </div>
        </div>
      </div>
      <div className="codeHandler">
        <CodeHandler
          darkmode="true"
          userCode={userCode}
          userLang={userLang}
          actualProblem={actualProblem}
        />
      </div>
    </div>
  );
}
export default Problem;
