import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import logo from '../logo.svg';
const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} style={{ width: '100px', height: '60px' }} />
              <span className="text-white text-xl font-bold">NASH</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-blue-200 transition-colors ${
                location.pathname === '/' ? 'border-b-2 border-white' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-blue-200 transition-colors ${
                location.pathname === '/about' ? 'border-b-2 border-white' : ''
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;