import { FaPhoneAlt, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className="contact-page" id="contact">
      <h1>Let's Talk.</h1>
      <div className="contact-ways">
        <div className="contact-side" data-aos="fade-up">
          <a href="tel:+40763411967">
            Call me: <span> 0763 411 967 </span>
            <FaPhoneAlt />
          </a>
        </div>

        <div className="contact-side" data-aos="fade-up">
          <a href="https://www.linkedin.com/in/cosmin-nae-39786222b/">
            Message me:<span>Cosmin Nae</span>
            <FaLinkedin />
          </a>
        </div>

        <div className="contact-side" data-aos="fade-up">
          <a href="mailto:cosminnae00@yahoo.com">
            Mail me:<span>cosminne00@yahoo.com </span>
            <FaRegEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
