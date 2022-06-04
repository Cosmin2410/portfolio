import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="logo">
        <img src="images/logo.svg" alt="logo" width="100" className="logo" />
      </div>

      <div className="links">
        <HashLink smooth to="#projects">
          Projects
        </HashLink>
        <HashLink smooth to="#skills">
          Skills
        </HashLink>
        <HashLink smooth to="#about">
          About Me
        </HashLink>
        <HashLink smooth to="#contact">
          Contact
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
