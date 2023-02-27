import React from "react";
import "./style/About.css";
import photo from "./../assets/images/photo.png"
function About() {
  return (
    <>
      <div>
        <div className="about">
          <h2>About Me</h2>
          <h1 className="highlight">Know More</h1>
          <hr />
          <div className="content">
            <div className="info">
              <p>
                <img src={photo} alt="Mypicture" />
                My name is <span className="highlight">FAIZ SIDDIQUE </span>
                currently persuing B.Tech. i will be graduate in 2024 from Noida
                institute of engineering & Technology greater noida with degree
                in computer science and engineer. i'm
                <span className="highlight"> MERN </span> stack developer. i'm
                very passionate about web developement and programming my goal
                is to become software engineer.in my free time i like to work
                on projects. i'm currently looking for full-time{" "} entry-level{" "} 
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
              </div>
              <hr />
              <h1 className="highlight">Certificates</h1>
              <hr />
              <div id="certification">
                
                <span>
                  <p>Course : Object Oriented Programming In Java <br /> 
                  Mode : Online <br />
                  Offered through : Coursera</p>
                </span>
                <span>
                  <p>Course : Java Programming : Array,List And Structured Data <br /> 
                  Mode : Online <br />
                  Offered through : Coursera</p>
                </span>
                <span>
                  <p>Course : Data Structures <br /> 
                  Mode : Online <br />
                  Offered through : Coursera</p>
                </span>
                <span>
                  <p>Course : Essential Google Cloud Infrastructure: Foundation<br/>
                  Mode : Online <br />
                  Offered through : Coursera</p>
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
                    target={"_blank"} rel="noreferrer"
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
                  <a className="btn btn-success" href="/">
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
