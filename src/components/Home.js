import React from "react";
import Background from "../images/background.jpg";
import Git from "../images/git.png";
import LinkedIn from "../images/linkedin.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="socialMedia">
        <img
          src={Git}
          alt=""
          onClick={() =>
            window.open("https://github.com/Prescilla2022?tab=repositories")
          }
        />
        <img
          src={LinkedIn}
          alt=""
          onClick={() =>
            window.open("https://www.linkedin.com/in/prescillaanuop")
          }
        />
      </div>
      <div className="mainContent">
        <h1>HEY, I’M PRESCILLA</h1>
        <p>
          A Frontend Web Developer mainly focused on building ineractive and
          user friendly applications that leads to the success of the overall
          product.
        </p>
        <button
          className="home-button"
          onClick={() => navigate("/portfolio/Projects")}
        >
          PROJECTS
        </button>
      </div>
    </div>
  );
}
