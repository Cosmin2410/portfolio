import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [flip, setFlip] = useState(true);

  const openMenu = () => {
    setFlip((prevFlip) => !flip);
  };

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
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      <div className="ham-menu">
        <div
          className={flip ? 'btn not-active' : 'btn active'}
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={flip ? 'mobile-nav' : ' nav-display'}>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>

        <div className="phone-nav-contact">
          <a
            href="https://github.com/Cosmin2410"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/cosmin-nae-39786222b/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
