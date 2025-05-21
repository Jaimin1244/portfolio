import Navbar from './Navbar'
import Home from '../section/Home';
import Contact from '../section/Contact';
import Projects from '../section/Projects';
import Technologies from '../section/Technologies';
import Footer from './Footer'
import { useThemeStore } from '../store/useThemeStore';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Layout = () => {

  const initTheme = useThemeStore(state => state.initTheme);

  useEffect(() => {
    initTheme();

    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
    
    <div className='flex-1 mx-auto px-4 py-6 space-y-20 scroll-smooth w-full container'>
        <Home data-aos="fade-up" />
        <Technologies data-aos="fade-right" />
        <Projects data-aos="fade-left" />
        <Contact data-aos="zoom-in" />
      </div>

      <Footer />
    </div>
  );
};

export default Layout