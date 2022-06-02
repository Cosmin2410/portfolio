import React from 'react';
import Buttons from './Buttons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="presentaion">
        <p className="hello">Hello I'm,</p>
        <h1>Cosmin Nae</h1>
        <p className="job">Front-End Delevoper</p>
        <div className="about-resume">
          <Buttons text={'Download Resume'} />
          <Buttons text={'About Me'} />
        </div>
        <div className="social">
          <a href="#" className="github">
            <FaGithub />
          </a>
          <a href="#" className="linkedin">
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
