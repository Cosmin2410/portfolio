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
          <h3 data-aos="fade-down">About Me.</h3>
          <h4>Front-End Developer</h4>
          <p data-aos="fade-in" data-aos-offset="200">
            I'm Nae Cosmin, a 21 year old Romanian
            <span> Front-End Developer</span>.
            <span> I love buildig stuff on the web </span>
            using various technologies.I always push my skills to the limit and
            give 110% on every project.
            <br />
            <br />I also love to <span> resolve programming problems </span>,
            create good looking <span> user interfaces</span> and develop useful
            <span> Web applications</span>. In my free time i like to play with
            my dog, i love going outdoors, learing about the intersting world of
            automotive. Overall I'm an active person
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
