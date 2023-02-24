import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./style/Header.css";
import Navbar from "./Navbar";
function Header() {
  const [introArray, setIntroArray] = useState([
    "FAIZ SIDDIQUE",
    "WEB DEVELOPER",
    "PROGRAMMER",
  ]);
  return (
    <>
      <div className="container-fluid header"></div>
      <div className="header-content">
        <Navbar/>
        <div className="short-intro">
          <h1 id="welcome">Welcome</h1>
          <h2>
            Hi I Am{" "}
            <span id="intro-highlight">
              <Typewriter
                options={{
                  loop: true,
                  delay:90
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(introArray[0])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray[1])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray[2])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray[1])
                    .start();
                }}
              />
            </span>
          </h2>
          <h6>Based In Greater Noida NCR India</h6>
        </div>
      </div>
    </>
  );
}

export default Header;
