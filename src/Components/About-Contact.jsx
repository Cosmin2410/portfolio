import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';

const AboutContact = () => {
  return (
    <div className="about-contact">
      <div className="about">
        <h2 className="bg-about">About</h2>
        <h3>About Me.</h3>
        <h4>Front-End Developer</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur <span>adipisicing</span> elit.
          <span>adipisicing similique, delectus repellat ut</span> , doloribus
          id incidunt distinctio eveniet deserunt eaque ipsam et aperiam
          suscipit, ex labore maxime ipsa <span>adipisicing</span> impedit rerum
          error aspernatur accusantium quod explicabo voluptates! Soluta, ex
          qui!
        </p>
      </div>

      <div className="contact">
        <h2 className="bg-contact">Contact</h2>
        <h3>Let's talk.</h3>

        <div className="contact-side">
          <a href="tel:+40763411967">
            Call me on:&nbsp;<span>0763 411 967 </span>
            &nbsp;&nbsp;&nbsp; <FaPhoneAlt />
          </a>
        </div>

        <div className="contact-side">
          <a href="mailto:cosminnae00@yahoo.com">
            Mail me at:&nbsp;<span>cosminne00@yahoo.com </span>
            &nbsp;&nbsp;&nbsp;
            <FaRegEnvelope />
          </a>
        </div>

        <div className="contact-side">
          <a href="https://www.linkedin.com/feed/">
            Message me on Linkedin at: <span>Cosmin Nae </span>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
