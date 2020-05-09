import React, { Component } from "react";
import "./signup.scss";
import { GrInProgress, GrMail } from "react-icons/gr";
import { RiUser4Line } from "react-icons/ri";

const waitIcon = <GrInProgress size="25px" className="ml-4"></GrInProgress>;
const Exist = (
  <h5 className="text-success mt-4">
    {" "}
    <strong> Success </strong> ! wait while Redirecting...
  </h5>
);

const DontExist = (
  <h5 className="text-danger mt-2">Wrong Credentials! try again</h5>
);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", Success: "" };
  }

  // handle the state of username
  handleUsername = (evt) => {
    this.setState({ username: evt.target.value });
  };

  // fct to hundle the passwor change
  handlePassword = (evt) => {
    this.setState({ password: evt.target.value });
  };

  /**
   * handle the signup by posting the user
   */
  handleSignup = () => {
    fetch("http://localhost:8443/signup", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: { "content-type": "application/json" },
    })
      .then((data) => {
        console.log(data);

        //cas de state is Ok :
        if (data.ok) {
          this.setState({ Success: waitIcon });
          setTimeout(() => {
            this.setState({ Success: Exist });
          }, 1000);
          setTimeout(() => {
            localStorage.setItem("username", this.state.username);
            window.location.replace("/user");
          }, 3700);
        } else {
          setTimeout(this.setState({ Success: "Wait..." }), 3000);
          this.setState({ Success: DontExist });
        }
      })
      .catch((error) => {
        console.log("error" + error);
      });
  };

  render() {
    if (this.props.signup % 2 == 0) {
      return (
        <div>
          <div className="container1 ">
            <div className="text-center mt-5">
              {" "}
              <RiUser4Line size="1.4em"></RiUser4Line>{" "}
              <p className=" text-center h5 mt-3">welcome</p>{" "}
            </div>
            <div className="row mt-3">
              <form className="mx-auto mt-2">
                <label>email</label>
                <input
                  value={this.state.username}
                  onChange={this.handleUsername}
                  type="text"
                  name="username"
                  placeholder="&#xF002;"
                  className="form-control col-md-15 "
                ></input>
                <label>password</label>
                <input
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type="password"
                  name="password"
                  placeholder=""
                  className="form-control col-md-15"
                ></input>
                <label> Repeat password</label>
                <input
                  type="password"
                  className="form-control col-md-15"
                ></input>
              </form>
            </div>
            <div className="divSignup text-center mt-4">
              <button
                id="btnSignup"
                type="button"
                className="btn btn-outline-dark text-right"
                onClick={this.handleSignup}
              >
                signup
              </button>
              {this.state.Success}
            </div>
          </div>
        </div>
      );
    } else return "";
  }
}
export default Signup;
