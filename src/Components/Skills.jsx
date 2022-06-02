import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My SkillSet</h2>

      <div className="skills">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />

        <p className="float-skills skill-one">GitHub</p>
        <p className="float-skills skill-two">GIT</p>
        <p className="float-skills skill-three">NPM</p>
        <p className="float-skills skill-four">SASS</p>
        <p className="float-skills skill-five">API</p>
      </div>

      <p></p>
      <p></p>
    </div>
  );
};

export default Skills;
