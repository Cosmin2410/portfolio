import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="wave-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2>My SkillSet</h2>

      <div className="skills">
        <FaHtml5 className="test" />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />

        <p className="float-skills skill-one">GitHub</p>
        <p className="float-skills skill-two">GIT</p>
        <p className="float-skills skill-three">NPM</p>
        <p className="float-skills skill-four">SASS</p>
        <p className="float-skills skill-five">API</p>
      </div>

      <div className="wave-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Skills;
