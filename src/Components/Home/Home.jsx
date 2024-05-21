import React from "react";
import "./Home.css";
import Education from "../Education/Education";

function Home() {
  return (
    <>
    <div className="container-fluid-home">
      <div className="home-about">
          <h1 className="display-1 radio-canada-big-h">Hi</h1>
          <h2 className="display-2 radio-canada-big-h">I'm Abdul Moid</h2>
          <h3 className="display-3 radio-canada-big-h">Fullstack Developer</h3>
        </div>
      <div className="image-container-home"></div>
    </div>
    <Education />
    </>
  );
}

export default Home;
