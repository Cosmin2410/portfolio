import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [flip, setFlip] = useState(true);

  const openMenu = () => {
    setFlip((prevFlip) => !flip);
  };

  return (
    <header>
      <div class="area">
        <ul class="circles">
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
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </header>
  );
};

export default Header;
