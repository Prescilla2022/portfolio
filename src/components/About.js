import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="about--heading">
        <h3>ABOUT ME</h3>
        <p className="underline"></p>
        <p>
          Here you will find more information about me,what I do and my current
          skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="about--mainContent">
        <div></div>
        <div className="content--one">
          <h4>Get to know me</h4>
          <div className="aboutMe">
            <p>
              I am a front end developer.My main focus is to develop user
              friendly,highly interactive and responsive front end.
            </p>
            <p>
              At present I am doing my front end development course at
              Jobloop.You can find some of my projects done during the course in
              the Projects section.
            </p>
            <p>
              I am open to job oppurtunities where I can contribute ,learn and
              grow.If you have a good oppurt
            </p>
          </div>
          <button
            className="about-button"
            onClick={() => navigate("/portfolio/Contact")}
          >
            CONTACT
          </button>
        </div>
        <div className="content--two">
          <h4>Skills</h4>
          <div className="skills">
            <button>Html</button>
            <button>Css</button>
            <button>JavaScript</button>
            <button>React</button>
            <button>Git</button>
            <button>GitHub</button>
            <button>Responsive Design</button>
          </div>
        </div>
      </div>
    </div>
  );
}
