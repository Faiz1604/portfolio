import React from "react";
import "./style/About.css";
function About() {
  return (
    <>
      <div>
        <div className="about">
          <h2>About Me</h2>
          <h1 className="highlight">Know More</h1>
          <hr />
          <div className="content">
            <div className="container info">
              <p>
                My name is <span className="highlight">FAIZ SIDDIQUE </span>
                currently persing B.Tech. i will be graduate in 2024 from Noida
                institute of engineering & Technology greater noida with degree
                in computer science and engineer. i'm
                <span className="highlight"> MERN </span> stack developer. i'm
                very passionate about web developement and programming my goal
                is to become software enginnering.in my free time i like to work
                on projects. i'm currently looking for full-time{" "}
                <span className="highlight">SOFTWARE ENGINEERING</span> or{" "}
                <span className="highlight">WEB DEVELOPMENT</span>{" "}
                opportunities.
              </p>
              <hr />
              <h1 className="highlight">Education</h1>
              <hr />
              <div className="education">
                <span id="college-name">
                  <h4 className="highlight">B.TECH(CSE)</h4>
                  <span>
                    Noida Institute of Engineering & Technology Greater Noida{" "}
                    <br />
                    2020-2024
                  </span>
                  <br />
                </span>
                <span id="intermediate-school">
                  <h4 className="highlight">XII</h4>
                  <span>
                    RB Children's Valley School Uttar Pradesh
                    <br />
                    2018-2020
                  </span>
                  <br />
                </span>
                <span id="high-school">
                  <h4 className="highlight">X</h4>
                  <span>
                    Manavsthali Public School Uttar Pradesh
                    <br />
                    2018
                  </span>
                  <br />
                </span>
              </div>
              <hr />
              <p id="fixed-background"></p>
              <h1 className="highlight">Projects</h1>
              <hr />

              <div className="projects">
                <span className="project">
                  <h4 className="highlight">Cricket Score Counter</h4>
                  <span className="project-description">
                    A web application which maintains live match score player
                    statistics in single click
                  </span>{" "}
                  <br />
                  <a
                    className="btn btn-success"
                    href="https://merascorer.in/"
                    target={"_blank"}
                  >
                    Visit
                  </a>
                </span>
                <span className="project">
                  <h4 className="highlight">NewsApp</h4>
                  <span>
                    A news App created using Reactjs and third party API
                  </span>
                  <br />
                  <a className="btn btn-success" href="#">
                    Visit
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
