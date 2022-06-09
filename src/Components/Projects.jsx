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
              First big project I got as a freelancer, I learned a lot about
              programming and how to put a website on the web. Overall
              everything went smooth, I got to learn new things that will help
              through my career and practice coding in a new environment.
            </p>
            <br />

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js, Digital
                Ocean, GitHub, GIT
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
              This project deepened my core skills with SASS and JavaScript. I
              learned a lot about how a website should be structured and also
              how helpful tools like Gulp really are.
            </p>

            <ul>
              <li>
                Technologies used: HTML, SASS, JavaScript, NPM, Gulp.js, Digital
                Ocean, GitHub, GIT
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
              This project is near and dear to my heart as i always wanted to
              build an e-commerce website for myself. The main challenge was
              integrating all the API's to work smooth and have a working
              website with features like user authentication, secure payments
              and dynamically added products.
            </p>

            <ul>
              <li>
                Technologies used: React, SASS , NPM, API, Stripe, Auth0,
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

        <div className="project" data-aos="fade-in" data-aos-once="true">
          <div className="project-description">
            <h3>Re-Design Gym App</h3>
            <p>
              In this project I helped re-designing all the user interface. I
              divided the whole process into 3 simple steps: Research, Prototype
              and Final Product. The main challenge was building modern looking
              components that also offer good user interactivity.
            </p>

            <ul>
              <li>Technologies used: HTML, CSS, JavaScript, GIT</li>
              <li>Role: Front-End Developer</li>
              <li>Context: UI Re-Design</li>
            </ul>

            <div
              className="project-btn"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <Buttons
                text={'View Code'}
                href={'https://github.com/alexandrugtone/VirtualTrainer'}
              />
            </div>
          </div>

          <div
            className="project-image"
            data-aos="fade-in"
            data-aos-once="true"
          >
            <img src="images/gym.jpg" width="640" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
