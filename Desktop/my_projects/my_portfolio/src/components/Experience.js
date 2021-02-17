import React from "react";
import "./Experience.css";

import {
  SiJavascript,
  SiJquery,
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiHeroku,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

import {
  FaNode,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <div id="experience"></div>

      <div>
        <hr id="lineBreak"></hr>
      </div>

      <div id="projectsTitle">
        <p>Skills</p>
      </div>
      <div id="contactSubHeader">
        <h3>Here are some of my skills.</h3>
      </div>
      <div id="skillsContainer">
        <div id="skillsImages">
          <ul>
            <li>
              <SiJavascript
                size="3em"
                color="yellow"
                style={{
                  backgroundColor: "black",
                }}
              />
            </li>
            <li>
              <SiJquery size="3em" />
            </li>
            <li>
              <FaNode size="3em" color="3C873A" />
            </li>
            <li>
              <SiCss3 size="3em" color="2965f1" />
            </li>
            <li>
              <SiHtml5 size="3em" color="f06529" />
            </li>
            <li>
              <FaReact size="3em" color="61DBFB" />
            </li>
            <li>
              <FaBootstrap size="3em" color="563d7c" />
            </li>
            <li>
              <SiPostgresql size="3em" color="336791" />
            </li>
            <li>
              <SiHeroku size="3em" color="6567a5" />
            </li>
            <li>
              <SiNetlify size="3em" color="00C7B7" />
            </li>
            <li>
              <FaGithub size="3em" color="black" />
            </li>
            <li>
              <FaGitAlt size="3em" color="f34f29" />
            </li>
            <li>
              <SiPostman size="3em" color="EF5B25" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
