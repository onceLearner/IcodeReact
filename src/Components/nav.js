import React from "react";

// temporary
import {
  GrUser,
  GrUserManager,
  GrUserAdmin,
  GrUserExpert,
  GrUserSettings,
  GrLogout,
} from "react-icons/gr";
import { TiThMenuOutline } from "react-icons/ti";

var stylenav = {
  backgroundColor: "#97bbd",
};
const icodelogo = "Code</>";
function Nav(props) {
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
              <a className="nav-link text-dark" href="#">
                {" "}
                docs
              </a>
            </li>
            <li className="nav-item ml-3">
              <a href="/algo" className="nav-link">
                {" "}
                Algorithms
              </a>
            </li>
            <li className="nav-item ml-3">
              <a href="/user" className="nav-link">
                {" "}
                Interface
              </a>
            </li>
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
