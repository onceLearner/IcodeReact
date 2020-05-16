import React, { useEffect, useState } from "react";

// temporary
import {
  GrUser,
  GrUserManager,
  GrUserAdmin,
  GrUserExpert,
  GrUserSettings,
  GrLogout,
} from "react-icons/gr";
import { TiThMenuOutline, TiPlusOutline } from "react-icons/ti";

var stylenav = {
  backgroundColor: "#97bbd",
};

const HighlightLocation = (pathnam) => {
  if (window.location.pathname == pathnam)
    return "nav-link border-bottom border-primary";
  return "nav-link text-dark";
};

const addPRob = (
  <li className="nav-item ml-3">
    <a href="/addProb" className={HighlightLocation("/addProb")}>
      {" "}
      add problem <TiPlusOutline></TiPlusOutline>
    </a>
  </li>
);

function Nav(props) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [addProb, setAddProb] = useState(null);

  const actualUser = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "hamid";

  useEffect(() => {
    const localBack = "http://localhost:8443/isAdmin";
    const RemoteBack = "https://arcane-ridge-61898.herokuapp.com/isAdmin";
    const RemoteAmazon =
      "https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/isAdmin";

    fetch(RemoteAmazon, {
      method: "post",
      body: `username=${actualUser}`,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        if (data == "yes") {
          setIsAdmin(true);
          setAddProb(addPRob);
        }
      });
  }, []);

  return (
    <div className="navContainer mb-4 bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg  text-dark" style={stylenav}>
        <a id="logo" href="/" className="ml-2 mr-5">
          <img src={require("../media/logoByMe5.png")} />
        </a>

        <button
          className="navbar-toggler border rounded  bg-light "
          style={{ backgroundColor: "#fefefa" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <TiThMenuOutline className="" color="black" />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link text-dark " href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={HighlightLocation("/docs")} href="#">
                {" "}
                docs
              </a>
            </li>
            <li className="nav-item ml-3">
              <a href="/algo" className={HighlightLocation("/algo")}>
                {" "}
                Algorithms
              </a>
            </li>
            <li className="nav-item ml-3 text-dark">
              <a href="/user" className={HighlightLocation("/user")}>
                {" "}
                Interface
              </a>
            </li>
            {addProb}
          </ul>
          <a href="#" className="mr-3">
            {" "}
            <GrUserSettings />
          </a>
          <a href="/" className="mr-3 ">
            {" "}
            <GrLogout></GrLogout>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
