import React from 'react';
import Desk from './Desk';

const About = () => {
  return (
    <div className="about">
      <div className="about-svg-top">
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

      <div className="description-desk" id="about">
        <div className="description-about">
          <h3>About Me.</h3>
          <h4>Front-End Developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <span>adipisicing</span>
            elit.
            <span>adipisicing similique, delectus repellat ut</span> , doloribus
            id incidunt distinctio eveniet deserunt eaque ipsam et aperiam
            suscipit, ex labore maxime ipsa <span>adipisicing</span> impedit
            rerum error aspernatur accusantium quod explicabo voluptates!
            Soluta, ex qui!
          </p>
        </div>

        <div className="desk-container">
          <Desk />
        </div>
      </div>

      <div className="about-svg-bot">
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

export default About;
