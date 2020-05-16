import React, { useState, useEffect } from "react";
import Nav from "./nav";
import { ScaleLoader } from "react-spinners";
import { BsCheckCircle } from "react-icons/bs";

export default function AddProb(probs) {
  const [label, setLabel] = useState("");
  const [explication, setExplication] = useState("");
  const [input, setInput] = useState("");
  const [ref, setRef] = useState("");
  const NewProb = {
    label: label,
    text: explication,
    input: input,
    ref: ref,
  };
  const [pleasefill, setPleaseFill] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiResut, setApiResut] = useState(null);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const success = (
    <div>
      <div className="row mt-2">
        <p className="text-success h5 mr-2">
          {" "}
          <b> added Succesfully </b>
        </p>

        <BsCheckCircle size="25px"></BsCheckCircle>
      </div>
      <small> wait while Redirectiong ..</small>
    </div>
  );
  const error = (
    <div>
      <p className="text-danger h5"> Error!</p>
    </div>
  );
  const pleaseFillAll = (
    <div>
      <p className="text-danger h5 py-2">
        {" "}
        Please fill all fields before submitting!
      </p>
    </div>
  );

  const isloading = loading ? <ScaleLoader></ScaleLoader> : "";

  const handleClick = (event) => {
    event.preventDefault();
    if (ref == "" || input == "" || label == "" || explication == "") {
      setPleaseFill(pleaseFillAll);
      return;
    }
    setPleaseFill(null);

    setLoading(true);
    const localBack = "http://localhost:8443/addP";
    const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/addP";
    const RemoteAmazon =
      "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/addP";

    fetch(RemoteAmazon, {
      method: "post",
      body: JSON.stringify(NewProb),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setApiResut(success);
        }, 1000);
        setTimeout(() => {
          window.location.replace("/algo");
        }, 3500);
      });
  };
  var styleRed = !isEmptyField ? { color: "black" } : { borderColor: "red" };

  return (
    <div>
      <Nav></Nav>
      <div className="ml-5 px-5 mt-3">
        <form>
          <div className="form-group ">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
                if (e.target.value === "") e.target.style.borderColor = "red";
                else e.target.style.borderColor = "";
              }}
              className="form-control col-8"
            />
            <small id="emailHelp" className="form-text text-muted">
              try something Concise and descriptivee
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Explication</label>
            <textarea
              type="text"
              value={explication}
              style={{ height: "120px" }}
              onChange={(e) => {
                setExplication(e.target.value);
                if (e.target.value === "") e.target.style.borderColor = "red";
                else e.target.style.borderColor = "";
              }}
              className="form-control col-8"
              placeholder="explain your problem"
            />
          </div>{" "}
          <div className="form-group">
            <label for="exampleInputEmail1"> Expected input</label>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (e.target.value === "") e.target.style.borderColor = "red";
                else e.target.style.borderColor = "";
              }}
              className="form-control col-8"
            />
            <small>
              {" "}
              enter the input you will <br></br> pass to program
            </small>
          </div>{" "}
          <div className="form-group">
            <label for="exampleInputEmail1">Expected output</label>
            <input
              value={ref}
              onChange={(e) => {
                setRef(e.target.value);
                if (e.target.value === "") e.target.style.borderColor = "red";
                else e.target.style.borderColor = "";
              }}
              type="text"
              className="form-control col-8"
            />
            <small>
              {" "}
              enter the output expected <br /> from a correct solution{" "}
            </small>
          </div>
          <div className="row">
            <button
              type="submit"
              className="btn btn-primary ml-5 mt-2 mb-2"
              onClick={handleClick}
            >
              Add the problem
            </button>
            <div className="ml-5">
              {" "}
              {isloading} {apiResut} {pleasefill}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
