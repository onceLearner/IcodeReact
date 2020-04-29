import React, { Component } from "react";
import "./signup.scss";
import { GrInProgress } from "react-icons/gr";

const waitIcon = <GrInProgress size="25px" className="ml-4"></GrInProgress>;
const Exist = <h5 className="text-success mt-2"> Success! Please Login Now</h5>;

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
    fetch("http://localhost:8081/signup", {
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
          <div className="container">
            <div className="row mt-5">
              <form className="mx-auto mt-4 ">
                <label>email</label>
                <input
                  value={this.state.username}
                  onChange={this.handleUsername}
                  type="text"
                  name="username"
                  className="form-control col-md-15 "
                ></input>
                <label>password</label>
                <input
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type="password"
                  name="password"
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
