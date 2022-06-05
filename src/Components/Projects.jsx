import { useEffect } from 'react';
import Buttons from './Buttons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="projects-page">
      <h2 id="projects">My Projects</h2>

      <div className="all-projects">
        <div className="project" data-aos="fade-in" data-aos-once="true">
          <div className="project-description">
            <h3>Magic Mirror</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js, Cloud
                Computing, GitHub, GIT
              </li>
              <li>Role: Front-End Developer</li>
              <li>Context: Website Creation from ground up</li>
            </ul>

            <div
              className="project-btn"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Buttons
                text={'Visit Website'}
                href={'https://amintiricuzambete.ro/'}
              />
              <Buttons
                text={'View Code'}
                href={'https://github.com/Cosmin2410/Magic-Mirror-WebSite'}
              />
            </div>
          </div>

          <div className="project-image">
            <img src="images/acz.png" width="640" />
          </div>
        </div>

        <div className="project" data-aos="fade-in" data-aos-once="true">
          <div className="project-description">
            <h3>Auto Service and Repair </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js, Cloud
                Computing, GitHub, GIT
              </li>
              <li>Role: Front-End Developer</li>
              <li>Context: Website Creation from ground up</li>
            </ul>

            <div
              className="project-btn"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Buttons
                text={'Visit Website'}
                href={'https://ascompactservice.ro/'}
              />
              <Buttons
                text={'View Code'}
                href={'https://github.com/Cosmin2410/Car-Service-Project'}
              />
            </div>
          </div>

          <div className="project-image">
            <img src="images/as.png" width="640" />
          </div>
        </div>

        <div className="project" data-aos="fade-in" data-aos-once="true">
          <div className="project-description">
            <h3>Online Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              laborum animi. Sit, minus odit. Reprehenderit assumenda optio in
              ipsa corporis.
            </p>

            <ul>
              <li>
                Technologies used: React, SASS , NPM, API, Stripe.js, Auth0,
                Commerce.js, GitHub, GIT
              </li>
              <li>Role: Front-End Developer</li>
              <li>Context: Personal Project</li>
            </ul>

            <div
              className="project-btn"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Buttons
                text={'Visit Website'}
                href={'https://amazing-gingersnap-e85241.netlify.app/'}
              />
              <Buttons
                text={'View Code'}
                href={'https://github.com/Cosmin2410/ecommerce-project'}
              />
            </div>
          </div>

          <div
            className="project-image"
            data-aos="fade-in"
            data-aos-once="true"
          >
            <img src="images/store.png" width="640" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
