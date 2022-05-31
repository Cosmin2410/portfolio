import React, { useState, useEffect } from 'react';

const Header = () => {
  const [flip, setFlip] = useState(false);

  const openMenu = () => {
    setFlip((prevFlip) => !flip);
  };

  return (
    <header>
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
      </div>
    </header>
  );
};

export default Header;
