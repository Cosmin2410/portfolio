import Desk from './Desk';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

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
          <h3 data-aos="fade-right">About Me.</h3>
          <h4 data-aos="fade-left">Front-End Developer</h4>
          <p data-aos="fade-in" data-aos-offset="200">
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
