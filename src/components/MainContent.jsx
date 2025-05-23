import React from "react";
import "./MainContent.css"; // Import the corresponding styles

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-container">
        {/* Left Text Section */}
        <div className="text-section">
          <h1>| Hi all. I am |</h1>
          <h2 className="nayu5 meme">Abhay Tripathi</h2> {/* Fixed className typo */}
          <p className="Fr-aontend">&gt; Front-end developer</p>
          <br />
          <br />
          <br />
          <p className="instructions">// Browsers spend on average 40% of their time just painting pixels on your screen—so every little CSS tweak really does matter!</p>
          <p className="instructions">// you can also see it on my Github page</p>
          <code>
            <span className="const">const</span>{" "}
            <span className="github-link">githubLink</span> ={" "}
            <span className="url">"https://github.com/AbhayTripathi128"</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default MainContent;