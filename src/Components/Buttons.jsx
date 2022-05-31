import React from 'react';

const Buttons = () => {
  return (
    <div>
      <button className="blob-btn">
        Download Resume
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default Buttons;
