import React, { useState } from "react";
import "./css/blogTemplate.css";

function BlogTemplate(props) {

  const [readStatus, setReadStatus] = useState(false);


  function handleClick() {
    setReadStatus(!readStatus);
  }


  return (
    <div className="blogClass">
      <h1>
        <strong>{props.title}</strong>
        <em> by {props.composedBy}</em>
        <p className="date" >{props.date}</p>
      </h1>
      <hr></hr>
      {readStatus ? <p>{props.body} <span><button className="btn btn-sm btn-outline-warning readbtn" onClick={handleClick} >read less</button></span></p> : <p>{props.body.slice(0, 200)} ...<span><button className="btn btn-sm btn-outline-warning readbtn" onClick={handleClick} >read more</button></span></p>}
    </div>
  );
}

export default BlogTemplate;
