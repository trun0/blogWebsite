import React, { useState } from "react";
import axios from "axios";
import "./css/blogTemplate.css";
import baseURL from "./BaseUrl";
import { useHistory } from "react-router-dom";

function MyBlog() {
  const history = useHistory();
  const [myBlogsArray, setMyBlogsArray] = useState([]);
  axios
    .post(baseURL + "/myblogServer", { user: localStorage.getItem("usernaam") })
    .then(function (response) {
      setMyBlogsArray(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  function deleteBlog(event) {
    const id = event.target.value;
    const user = localStorage.getItem("usernaam");
    console.log(id + " " + user);
    axios
      .post(baseURL + "/deleteBlogServer", {
        user: user,
        id: id,
      })
      .then(function (response) {
        console.log(response);
        history.push("/myblog");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      {myBlogsArray.map((element) => {
        return (
          <div key={element._id} className="blogClass">
            <h1>
              <strong>{element.title}</strong>
              <em> by {element.composedBy}</em>
              <p className="date" >{element.date}</p>
            </h1>
            <form>
              <button
                type="button"
                onClick={deleteBlog}
                className="btn btn-sm btn-outline-warning"
                name="blogId"
                value={element._id}
              >
                Delete
              </button>
            </form>
            <hr></hr>
            <p>{element.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MyBlog;
