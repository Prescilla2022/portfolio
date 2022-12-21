import "./App.css";
import Header from "./components/Header.js";
import "./styles/Global.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import "./styles/About.css";
import "./styles/projects.css";
import "./styles/Contact.css";
import Data from "./data/Data.js";
import { Routes, Route, Link } from "react-router-dom";

import { createContext } from "react";
import Details from "./components/Details";

export const dataContext = createContext();

export default function App() {
  console.log("Hello");

  return (
    <div className="App">
      <div className="navBar">
        <h3 className="name">Prescilla</h3>
        <div className="navItems">
          <Link className="link" to="/portfolio/">
            HOME
          </Link>
          <Link className="link" to="/portfolio/About">
            ABOUT
          </Link>
          <Link className="link" to="/portfolio/Projects">
            PROJECTS
          </Link>
          <Link className="link" to="/portfolio/Contact">
            CONTACT
          </Link>
          <Link className="link" to="/portfolio/Details"></Link>
        </div>
      </div>

      <dataContext.Provider value={Data}>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/About" element={<About />} />
          <Route path="/portfolio/Projects" element={<Projects />} />
          <Route path="/portfolio/Contact" element={<Contact />} />
          <Route path="/portfolio/Details" element={<Details />} />
        </Routes>
      </dataContext.Provider>
    </div>
  );
}
