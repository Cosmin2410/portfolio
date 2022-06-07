import { useEffect } from 'react';
import Buttons from './Buttons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 0,
    });
  }, []);

  return (
    <div className="main-page">
      <div className="presentaion">
        <p className="hello">Hello I'm,</p>
        <div className="box">
          <div className="title">
            <span className="block"></span>
            <h1>
              Cosmin Nae<span></span>
            </h1>
          </div>

          <div className="role">
            <div className="block"></div>
            <p>Front-End Developer</p>
          </div>
        </div>

        <div className="resume-btn" data-aos="fade-in">
          <Buttons
            text={'Download Resume'}
            href={'images/CV_Cosmin_Nae_EN.pdf'}
          />
        </div>
        <div className="social" data-aos="fade-in" data-aos-delay="500">
          <a
            href="https://github.com/Cosmin2410"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/cosmin-nae-39786222b/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="me-object">
        <p>
          <span>1</span> &nbsp; const <span>me</span> = &#123;
        </p>
        <p>
          <span>2</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name: "
          <span>Cosmin Nae</span>" ,
        </p>
        <p>
          <span>3</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; age:&nbsp;
          <span>new Date().getFullYear() - 2000</span> ,
        </p>
        <p>
          <span>4</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; learned: ["
          <span>HTML</span>", "<span>CSS </span>", "<span>JavaScript</span>", "
          <span>React</span>" ],
        </p>
        <p>
          <span>5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; passionate:{' '}
          <span>true</span>,
        </p>
        <p>
          <span>6</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hobbies: ["
          <span>Gaming</span>", "<span>Technology</span>", "<span>Coding</span>
          "],
        </p>
        <p>
          <span>7</span> &nbsp; &#125; ;
        </p>
      </div>
    </div>
  );
};

export default MainPage;
