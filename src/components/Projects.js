import React from "react";

import Details from "./Details.js";

export default function Projects() {
  return (
    <div>
      <div className="projects">
        <div className="header--project">
          <h3>PROJECTS</h3>
          <p className="underline"></p>
          <p>Here you will find some of the projects that I created</p>
        </div>
        <div className="projectContainer">
          <Details />
        </div>
      </div>
    </div>
  );
}
