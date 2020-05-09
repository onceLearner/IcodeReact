import React from "react";

// temporary
import { GrTest } from "react-icons/gr";
import { TiThMenuOutline } from "react-icons/ti";

var stylenav = {
  backgroundColor: "#97bbd",
};
const icodelogo = "Code</>";
function Navbar(props) {
  return (
    <div className="navContainer mb-4 ">
      <nav className="navbar navbar-expand-lg  text-dark" style={stylenav}>
        <a id="logo" href="/" className="ml-2 mr-5">
          <img src={require("../media/logoByMe5.png")} />
        </a>

        <button
          className="navbar-toggler "
          style={{ backgroundColor: "rgba(230, 230, 250, 0.559)" }}
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
          </ul>
          <a href="/auth" className="mr-3">
            {" "}
            <button
              type="button"
              id="login"
              className="px-3 btn btn-outline-dark "
            >
              login
            </button>
          </a>
          <a href="/auth" className="mr-3">
            {" "}
            <button type="button" className="px-3 btn btn-danger   ">
              Register
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
