import React from "react";
import axios from "axios";
import "./css/blogTemplate.css";

function BlogTemplate(props) {
  return (
    <div className="blogClass">
      <h1>
        <strong>{props.title}</strong>
        <em> by {props.composedBy}</em>
      </h1>
      <hr></hr>
      <p>{props.body}</p>
    </div>
  );
}

export default BlogTemplate;
