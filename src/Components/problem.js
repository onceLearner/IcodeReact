import React, { useState, useEffect } from "react";
import { GrInProgress, GrCheckboxSelected, GrCode } from "react-icons/gr";
import { DiPython, DiJava, DiCodeBadge } from "react-icons/di";
import AceEditor from "react-ace";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "./navbar";

import ExplainProblem from "./explainProblem";
import CodeHandler from "./codeHandler.js";
import Nav from "./nav";

import "./problem.scss";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-dracula";

import Select from "react-dropdown-select";
import { languages } from "prismjs";
import { BarLoader, DotLoader, SyncLoader, SkewLoader } from "react-spinners";
const py = <DiPython></DiPython>;

function Problem() {
  const [userCode, setUserCode] = useState("");
  const [userLang, setUserLang] = useState("py");
  const flagLocalStorage = localStorage.getItem("actualProblem") ? true : false;

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

      if (!flagLocalStorage) setsctualProblem(data[0]);
      else setsctualProblem(JSON.parse(localStorage.getItem("actualProblem")));

      setLoading(false);
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  var darkmode = { backgroundColor: "#fff" };

  return (
    <div className="problemMainDiv" style={darkmode}>
      <Nav></Nav>
      <div className="listProblemsCont container    mt-4 ">
        {loading ? (
          <div>
            {" "}
            <span className="h5"></span> <BarLoader></BarLoader>{" "}
          </div>
        ) : (
          <div className="col-md-5"></div>
        )}
      </div>
      <div className="EditorTextCont  ">
        <div className="text-container mr-2 ml-3 ">
          <ExplainProblem actualProblem={actualProblem} />
        </div>
        <div className="editorLangCont">
          <div className="selectContainer text-dark mt-3     px-3">
            <Select
              options={Languages}
              value={userLang}
              onChange={(newvalue) => {
                setUserLang(newvalue[0].name);
              }}
              className=""
              placeholder={" language </>"}
            />
          </div>
          <div className="EditorContainer mr-3  ml-3 mb-3 row ">
            <AceEditor
              className="border  border-white"
              mode={userLang}
              theme="dracula"
              enableLiveAutocompletion="true"
              width="54em"
              height="33em"
              placeholder=" code here "
              value={userCode}
              onChange={(newValue) => {
                setUserCode(newValue);
              }}
            />
            <div className="codeHandler ">
              <CodeHandler
                darkmode="true"
                userCode={userCode}
                userLang={userLang}
                actualProblem={actualProblem}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Problem;
