import React from 'react';

const Buttons = () => {
  return (
    <div>
      <button class="blob-btn">
        Blob Buttons
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default Buttons;
