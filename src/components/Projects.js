import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
function Projects() {
  return (
    <div className="container conp ">
      <div className="c1">
        <h4><b>Small Project on Frontend</b></h4>
        <p className="fs-5">
          I have created a small website using frontend tools like{" "}
          <b>HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP, API's</b> and it is user
          responsive. I have also used fake API to fetch the data from that and
          that data is placed into the corresponding place.
        </p>
        <Link className="linkp" to="https://amazonclothes.netlify.app/">
          Visit Website...
        </Link>
      </div>
      <hr />
      <div className="c2">
        <h4><b>URL Analyzer</b></h4>
        <p className="fs-5">
          By using python i have created a url analyzer. When an user gives an
          url in the field then that analyzes the url and gives the properties
          of that url Like
          <ol>
            <li>IP Address</li>
            <li>Server</li>
            <li>Server Host</li>
            <li>Status code</li>
            <li>HTTP Headers</li>
          </ol>
        </p>
      </div>
      <hr />
      <div className="c3">
        <h4><b>Online Voting System</b></h4>
        <p className="fs-5">
          By using JAVA i have created this project. In this project i used
          swings, Event Listeners and etc.. I have used a database for this
          project to store te votes. Mysql Database is used. I have established
          Connection through Java JDBC and it stores the new user data and the
          votes of the voter. In this we can also see the Winners. Winners can
          be seen by the voting administrator and he can declare the Winners.
        </p>
      </div>
      <hr />
    
    </div>
  );
}

export default Projects;
