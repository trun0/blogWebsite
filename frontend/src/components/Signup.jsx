import React, { useState } from "react";
import "./css/signup.css";
import axios from "axios";
import baseURL from "./BaseUrl";
import {useHistory, Link} from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  
  function handleUser(event) {
    setSignupUsername(event.target.value);
  }
  function handlePass(event) {
    setSignupPassword(event.target.value);
  }


  function handleSignup() {
    if (signupUsername.length !== 0 && signupPassword.length !== 0) {
      axios.post(baseURL + "/signupServer", {
          username: signupUsername,
          password: signupPassword
        }).then((response)=>{
          console.log(response);
          if(response.data === false) {
          alert("Successfully Signed up. Now, please login");
          history.push("/login");
          }
          else {
            alert("Signup failed. Username already exists");
          }
        }).catch(function (error) {
          console.log(error);
        });
    } else alert("Try again");
  }

  return (
    <div className="signup">
      <h1 className="big-heading">Signup</h1>

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
          value={signupUsername}
          autoComplete="off"
          required
        ></input>
        <div className="form-text checkUsernameAvailability"></div>

        <label>
          <i className="fas fa-lock"></i> Password
        </label>
        <input
          onChange={handlePass}
          type="password"
          className="form-control password"
          name="password"
          placeholder="Enter Password"
          value={signupPassword}
          autoComplete="off"
          required
        ></input>

        <button
          onClick={handleSignup}
          type="button"
          className="btn btn-danger button"
          name="button"
          value="signup"
        >
          Signup
        </button>

        <div>
          Already registered? <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Go to Home</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
