import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function ContactMe() {
  return (
    <div>
      <h3 className="h3c text-center pt-3">Hey HI!  Let's talk...</h3>
      <div className="container ">
        <ul className="navbar-nav navc p-5">
          <li className="nav-item navi ">
            <Link className="links" to="https://www.instagram.com/_kadithya_?igsh=NHc5b2QyZTU5MHQ2">
              <FontAwesomeIcon icon={faInstagram} className="iconss" />
              <span className="sc"> Instagram</span>
            </Link>
          </li>
          <li className="nav-item navi">
            <Link className="links" to="https://www.linkedin.com/in/adithya-kadukuntla-a60534265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FontAwesomeIcon icon={faLinkedinIn} className="iconss" />
              <span className="sc"> Linked In</span>
            </Link>
          </li>
          <li className="nav-item navi">
            <Link className="links" to='https://github.com/'>
              <FontAwesomeIcon icon={faGithub} className="iconss" />
              <span className="sc"> Github</span>
            </Link>
          </li>
          {/* <li className="nav-item navi">
            <Link className="links" to='tel:91 7093592456'>
              <FontAwesomeIcon icon={faPhone} className="iconss" />
              <span className="sc"> Call</span>
            </Link>
          </li> */}
          <li className="nav-item navi">
            <Link  className="links" to='mailto:adhichiru634@gmail.com?subject=Hello&body=Write your message here'>
              <FontAwesomeIcon icon={faEnvelope} className="iconss" />
              <span className="sc"> G-Mail</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMe;
