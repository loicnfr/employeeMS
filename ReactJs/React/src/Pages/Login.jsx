// import { useState } from "react";
import React from "react";
import logining from "./loginpic.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const Login = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logining} alt="" className="img-fluid"></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">
                  Login to your account
                </p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  required
                ></input>
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  // onChange={(e) => {
                  //   setPassword(e.target.value);
                  // }}
                  required
                ></input>
                <label className="form-label">Password</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    // onClick={Login}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
