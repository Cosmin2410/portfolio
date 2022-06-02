import React from 'react';
import Buttons from './Buttons';

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>

      <div className="all-projects">
        <div className="project">
          <div className="project-description">
            <h3>Magic Mirror</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js,Cloud
                Computing
              </li>
              <li>Role: Front-End Developer</li>
              <li>Context: Website Creation from ground up</li>
            </ul>

            <div className="project-btn">
              <Buttons text={'Visit Website'} />
              <Buttons text={'View Code'} />
            </div>
          </div>

          <div className="project-image">
            <img src="images/acz.png" height="500" width="500" />
          </div>
        </div>

        <div className="project">
          <div className="project-description">
            <h3>Service Auto</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js, Cloud
                Computing
              </li>
              <li>Role: Front-End Developer</li>
              <li>Context: Website Creation from ground up</li>
            </ul>

            <div className="project-btn">
              <Buttons text={'Visit Website'} />
              <Buttons text={'View Code'} />
            </div>
          </div>

          <div className="project-image">
            <img src="images/as.png" height="350" width="550" />
          </div>
        </div>

        <div className="project">
          <div className="project-description">
            <h3>Online Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js</li>
              <li>Role: Front-End Developer</li>
              <li>Context: Personal Project</li>
            </ul>

            <div className="project-btn">
              <Buttons text={'Visit Website'} />
              <Buttons text={'View Code'} />
            </div>
          </div>

          <div className="project-image">
            <img src="images/store.png" height="350" width="550" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
