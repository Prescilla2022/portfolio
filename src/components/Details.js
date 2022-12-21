import React from "react";
import { dataContext } from "../App.js";
import { useContext } from "react";

export default function Details() {
  const Data = useContext(dataContext);

  const result = Data.map((data, index) => {
    return (
      <div className="container">
        <div className="projectImage">
          <div className="imagedisplay">
            <img className="image" src={data.imageUrl}></img>
          </div>
          <button
            className="project-button"
            onClick={() => window.open(data.gitLive)}
          >
            Live Pages
          </button>
        </div>
        <div className="project--mainContent">
          <h4>{data.name}</h4>
          <div className="aboutProject">
            <p>{data.description}</p>
            <button
              className="about-button"
              onClick={() => window.open(data.gitUrl)}
            >
              Git Hub
            </button>
          </div>
        </div>
      </div>
    );
  });
  return result;
}
