import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
// import Testimonial from './Components/Testimonial';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <MainPage />
        <Projects />
        {/* <Testimonial /> */}
        <Skills />
        <About />
        <Contact />
        <Footer />
      </>
    </BrowserRouter>
  );
}

// npm i aos --save

export default App;
