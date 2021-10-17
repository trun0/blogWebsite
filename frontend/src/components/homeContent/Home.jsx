import React from "react";

function Home() {
  return (
    <div id="homeLink" className="home">
      <h2>Write Something Good</h2>
      <p>
        This is a platform to write blogs. Here write whatever you want to
        write. There are <strong>several benefits</strong> of writing a blog.
        <ul>
          <li>Sharing Knowledge</li>
          <li>Sharing Experiences</li>
          <li>Attract Audience</li>
          <li>And many more...</li>
        </ul>
        Here are some instructions:
        <ul>
          <li>You can view others blogs without logging in</li>
          <li>You can only publish a blog once you are logged in</li>
          <li>You can delete your blogs by clicking the delete button in My blogs section(visible only when you are logged in)</li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
