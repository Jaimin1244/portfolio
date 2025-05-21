import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`z-50 transition-all duration-300 ease-in-out bg-base-200 ${isScrolled
        ? 'fixed top-0 left-0 right-0 shadow-lg'
        : 'relative'
        }`}
    >
      <div className='navbar flex justify-between'>
        <div className='flex-1'>
          <Link to="/" className='text-xl font-bold'>
            MyPortfolio
          </Link>
        </div>

        <div className='absolute left-1/2 transform -translate-x-1/2 sm:flex hidden gap-4'>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`relative px-2 py-1 btn-ghost btn-sm ${activeTab === item.id ? 'font-bold text-primary' : ''
                }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-primary/10 rounded-md"
                />

              )}
            </a>
          ))}
        </div>

        <div className='flex-none'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
