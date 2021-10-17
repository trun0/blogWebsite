import "./css/signup.css";
import React, { useState } from "react";
import axios from "axios";
import baseURL from "./BaseUrl";

function Login(props) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleUser(event) {
    setLoginUsername(event.target.value);
  }
  function handlePass(event) {
    setLoginPassword(event.target.value);
  }

  function handleLogin() {
    axios
      .post(baseURL + "/loginServer", {
        username: loginUsername,
        password: loginPassword,
      })
      .then(function (response) {
        if (response.data === true) {
          localStorage.setItem("usernaam", loginUsername);
          alert("Login succesfull");
          return window.location.replace(baseURL+"/compose");
        } else {
          alert("Login failed. Please try again!!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="signup">
      <h1 className="big-heading">Login</h1>

      <form className="">
        <label>
          <i className="fas fa-user"></i> Username
        </label>
        <input
          onChange={handleUser}
          type="text"
          className="form-control username"
          name="username"
          placeholder="Enter Username"
          value={loginUsername}
          autoComplete="off"
          required
        ></input>

        <label>
          <i className="fas fa-lock"></i> Password
        </label>
        <input
          onChange={handlePass}
          type="password"
          className="form-control password"
          name="password"
          placeholder="Enter Password"
          value={loginPassword}
          autoComplete="off"
          required
        ></input>

        <button
          onClick={handleLogin}
          type="button"
          className="btn btn-danger button"
          name="button"
          value="Login"
        >
          Login
        </button>

        <div>
          New here? <a href="/signup">Register</a>
        </div>
        <div>
          <a href="/">Go to Home</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
