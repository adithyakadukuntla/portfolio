import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faTools,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
function NavBar() {
  return (
    <div>
      <ul className="navbar nav navbar-expand-sm nav-tabs  bg-secondary   justify-content-end ">
        <li className="nav-item n ">
          <Link className="nav-link" to="">
            <FontAwesomeIcon icon={faHome} className="icons" /> <span>Home</span>
          </Link>
        </li>
        <li className="nav-item n">
          <Link className="nav-link" to="/aboutme">
            <FontAwesomeIcon icon={faUser} className="icons" /> <span>About Me</span>
          </Link>
        </li>
        <li className="nav-item n">
          <Link className="nav-link" to="/skills">
            <FontAwesomeIcon icon={faTools} className="icons" />
            <span>Skills</span>
          </Link>
        </li>
        <li className="nav-item n">
          <Link className="nav-link" to="/projects">
            <FontAwesomeIcon icon={faProjectDiagram}  className="icons"/>
            <span>Projects</span>
          </Link>
        </li>
        <li className="nav-item n">
          <Link className="nav-link" to="/contactme">
            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
            <span>Contact Me</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
