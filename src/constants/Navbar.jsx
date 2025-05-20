import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-md flex'>

      <div className='flex-1'>
        <Link to="/" className='text-xl font-bold'>
          MyPortfolio
        </Link>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 gap-4'>
        <a href="#home" className="btn btn-ghost btn-sm">Home</a>
        <a href="#technologies" className="btn btn-ghost btn-sm">Technologies</a>
        <a href="#projects" className="btn btn-ghost btn-sm">Projects</a>
        <a href="#contact" className="btn btn-ghost btn-sm">Contact</a>
      </div>

      <div className='flex-none'>
        <ThemeToggle />
      </div>

    </div>
  );
};

export default Navbar