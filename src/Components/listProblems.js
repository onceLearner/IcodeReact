import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";

function ListProblems(props) {
  const [listProblemsVar, setlistProblemsVar] = useState([]);
  const [idp, setidp] = useState("1");
  const [ActualProb, setActualProb] = useState([
    {
      idp: "1",
      title: "print hello world",
      text: " ecrire un program qui affiche le message hello world ",
      input: "l",
      output: "hello world",
    },
  ]);

  const GetProps = () => {
    fetch("http://localhost:8081/getp")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setlistProblemsVar(data);
      });
  };

  return (
    <div>
      <Select
        options={listProblemsVar}
        value={ActualProb}
        onChange={(newvalue) => {
          setActualProb(newvalue);
        }}
        className=""
        placeholder="chose a problem"
      ></Select>

      <div>
        <h3
          onClick={() => {
            console.log(GetProps());
          }}
        >
          {ActualProb[0].text}
        </h3>
      </div>
      <div>
        <h3>{ActualProb[0].input}</h3>
      </div>
      <div>
        <h3>{ActualProb[0].output}</h3>
      </div>
    </div>
  );
}

export default ListProblems;
