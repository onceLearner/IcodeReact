import React from "react";

// temporary
import { GrTest } from "react-icons/gr";
import { TiThMenuOutline } from "react-icons/ti";

var stylenav = {
  borderBottom: "#495057   solid 0.2mm",
  backgroundColor: "#212529",
};
const icodelogo = "Code</>";
function Navbar(props) {
  return (
    <div className="navContainer ">
      <nav className="navbar navbar-expand-lg  text-light" style={stylenav}>
        <a href="/">
          {" "}
          <span className="text-light ml-4 mr-5 px-5">
            {" "}
            <code>I</code> {icodelogo}
          </span>
        </a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <TiThMenuOutline className="" color="white" />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-link text-light " href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                {" "}
                docs
              </a>
            </li>
          </ul>
          <a href="/auth" className="mr-3">
            {" "}
            <button
              type="button"
              id="create"
              className="px-3 btn btn-outline-light"
            >
              Create Account
            </button>
          </a>
          <a href="/auth" className="mr-3">
            {" "}
            <button
              type="button"
              className="px-3 btn btn-light broder border-rounded"
            >
              login
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
