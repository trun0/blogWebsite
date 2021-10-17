import React, { useState } from "react";
import "./css/compose.css";
import axios from "axios";
import baseURL from "./BaseUrl";

function Compose() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleBody(event) {
    setBody(event.target.value);
  }

  function handleCompose() {
    axios
      .post(baseURL + "/composeServer", {
        postTitle: title,
        postBody: body,
        user: localStorage.getItem("usernaam"),
      })
      .then(function (response) {
        console.log(response);
        if (response.data === true) {
          alert("Succesfully published");
          window.location.replace(baseURL+"/myblog");
        } else {
          alert("Compose failed. Please try after logging in!!");
          window.location.replace(baseURL+"/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2 className="compose-heading">Compose</h2>

      <form className="compose-form">
        <div className="">
          <label>
            <strong>Title</strong>
          </label>
          <br />
          <input
            onChange={handleTitle}
            className="form-control"
            type="text"
            name="postTitle"
            autoComplete="off"
            value={title}
          ></input>

          <label>
            <strong>Post</strong>
          </label>
          <br />
          <textarea
            onChange={handleBody}
            className="form-control"
            name="postBody"
            rows="5"
            cols="50"
            value={body}
          ></textarea>
        </div>

        <button
          onClick={handleCompose}
          className="btn btn-primary mt-3 compose-button"
          type="button"
          name="button"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default Compose;
