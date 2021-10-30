import React, { useState } from "react";
import axios from "axios";
import BlogTemplate from "./BlogTemplate";
import baseURL from "./BaseUrl";

function Blog() {
  let [[blogsArray, change], setBlogsArray] = useState([[], true]);

  if(change) {
    axios.get(baseURL + "/blogServer")
    .then(function (response) {
      //    console.log(response.data);
      setBlogsArray([response.data, false]);
      change=false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }


  return (
    <div>
      {blogsArray.map((element) => {
        return (
          <BlogTemplate
            key={element._id}
            id={element._id}
            title={element.title}
            body={element.body}
            composedBy={element.composedBy}
          />
        );
      })}
    </div>
  );
}

export default Blog;
