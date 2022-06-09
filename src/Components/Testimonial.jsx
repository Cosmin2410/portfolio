import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 0,
    });
  }, []);

  return (
    <div className="testimonial-container">
      <h2>What people I have worked with said about me.</h2>
      <div className="testimonials">
        <div className="testimonial" data-aos="fade-up">
          <h3>
            Florian from <span>Magic Mirror Website</span>
          </h3>
          <p>
            I highly recommend Cosmin for creating my site. He was very
            qualified, knowing exactly how to make it run fast and also look
            good. Also the search engine optimisation was a very helpful extra
            benefit.
          </p>

          <div className="refernce">
            <p>
              Contact for refernce: <span>0760 332 472</span>
            </p>
          </div>
        </div>

        <div className="testimonial" data-aos="fade-up">
          <h3>
            Alex from <span>Gym App</span>
          </h3>
          <p>
            He's very professional, helped me with redesigning my app. Also
            helped me better understand what I was doing wrong and was really
            patient in explaining what I had to do next. I would definitely
            recommend him and his skills.
          </p>

          <div className="refernce">
            <p>
              Contact for refernce: <span>0731 292 803</span>
            </p>
          </div>
        </div>

        {/* <div className="testimonial" data-aos="fade-up">
          <h3>
            Florian from <span>Magic Mirror Website</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            quisquam quae odit, quidem ratione odio autem, ad inventore, ab
            dicta debitis deserunt doloremque dignissimos facere minima mollitia
            consequuntur cupiditate facilis!
          </p>

          <div className="refernce">
            <p>
              Contact for refernce: <span>+40763 411 967</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
