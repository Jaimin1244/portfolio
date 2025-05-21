import React from 'react'
import ScrollToTop from '../components/ScrollToTop';

const Footer = () => {
  return (
    <footer className='footer footer-center p-4 bg-base-300 mt-10 text-base-content w-full'>
      <aside>
        <p>&copy; {new Date().getFullYear()} Jaimin PateL. All rights reserved.</p>
        <ScrollToTop />
      </aside>

    </footer>
  );
};

export default Footer