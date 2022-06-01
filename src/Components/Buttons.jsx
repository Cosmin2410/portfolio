import React from 'react';

const Buttons = ({ text }) => {
  return (
    <div className="btn-component">
      <button className="blob-btn">
        {text}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Buttons;
