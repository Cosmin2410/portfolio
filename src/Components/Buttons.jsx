import React from 'react';

const Buttons = ({ text, href }) => {
  return (
    <div className="btn-component">
      <a href={href} target="_blank" rel="noreferrer">
        <button className="blob-btn">
          {text}

          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </a>
    </div>
  );
};

export default Buttons;
