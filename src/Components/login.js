import React, { useState } from "react";
import { GrInProgress } from "react-icons/gr";
import { RiUser4Line } from "react-icons/ri";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Success, setSuccess] = useState("");

  // some variables to and icon
  const waitIcon = <GrInProgress size="25px" className="ml-4"></GrInProgress>;

  const Exist = (
    <h5 className="text-success mt-2"> Success ! wait while Redirecting .. </h5>
  );

  const DontExist = (
    <h5 className="text-danger mt-2">Wrong Credentials! try again</h5>
  );

  /**
   * manage the state Success wether to succedd findign user with the same creditial  or not
   */

  const handleLogin = () => {
    var reda;
    fetch("http://localhost:8443/fakeGet")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const ApiResult = data.filter(
          (obj) => obj.username == username && obj.password == password
        );
        reda = ApiResult.length !== 0 ? true : false;

        // check if the user exists
        if (reda) {
          setTimeout(setSuccess(waitIcon), 3000);
          localStorage.setItem("username", username);

          // setSuccess(Exist);
          setTimeout(() => {
            setSuccess(Exist);
          }, 1000);
          setTimeout(() => {
            window.location.replace("/user");
          }, 3000);
        } else {
          setTimeout(setSuccess("Wait..."), 3000);
          setSuccess(DontExist);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //button variable element
  var Button = (
    <button
      type="button"
      id="btnSignup"
      className="btn btn-outline-dark text-right"
      onClick={handleLogin}
    >
      {" "}
      Login
    </button>
  );

  // page redered only if the login/signup modularity matches for the login + depends on the props given the app js
  if (props.login % 2 == 1) {
    return (
      <div>
        <div className="container1 ">
          <div className="text-center mt-5">
            <RiUser4Line size="1.4em"></RiUser4Line>{" "}
            <p className=" text-center h5 mt-3">welcome</p>{" "}
          </div>
          <div className="row mt-2">
            <form className="mx-auto mt-4 ">
              <label>email</label>
              <input
                value={username}
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
                type="text"
                name="username"
                className="form-control col-md-15 "
              ></input>
              <label>password</label>
              <input
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
                type="password"
                name="password"
                className="form-control col-md-15"
              ></input>
            </form>
          </div>

          <div className="divSignup text-center mt-4">
            {" "}
            {Button}
            {Success}
          </div>
        </div>
      </div>
    );
  } else return "";
}
export default Login;
