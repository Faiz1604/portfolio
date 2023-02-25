import React from "react";
import "./style/Skills.css";
function Skills() {
  return (
    <div className="contain">
      <h1>Skills</h1>
      <hr />
      <h3>javaScript</h3>
      <div class="range">
        <div class="skills javascript"></div>
      </div>

      <h3>Java Core</h3>
      <div class="range">
        <div class="skills javacore"></div>
      </div>

      <h3>Python</h3>
      <div class="range">
        <div class="skills python"></div>
      </div>
      <h3>Data Structures</h3>
      <div class="range">
        <div class="skills ds"></div>
      </div>
      <h3>ReactJs</h3>
      <div class="range">
        <div class="skills reactjs"></div>
      </div>
      <h3>HTML</h3>
      <div class="range">
        <div class="skills html"></div>
      </div>
      <h3>CSS</h3>
      <div class="range">
        <div class="skills css"></div>
      </div>
    </div>
  );
}

export default Skills;
