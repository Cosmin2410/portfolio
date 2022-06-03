import React from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';

const AboutContact = () => {
  return (
    <div className="about-contact">
      <div className="about">
        <h3>About Me.</h3>
        <p>Front-End Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          similique, delectus repellat ut, doloribus id incidunt distinctio
          eveniet deserunt eaque ipsam et aperiam suscipit, ex labore maxime
          ipsa consequatur impedit rerum error aspernatur accusantium quod
          explicabo voluptates! Soluta, ex qui!
        </p>
      </div>

      <div className="contact">
        <h2 className="bg-title">Contact</h2>

        <h3>Let's talk.</h3>
        <FaPhoneAlt />
        <FaRegEnvelope />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default AboutContact;
