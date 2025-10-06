import React, { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <a href="/" className="inline-block">
              <img
                src="/images/CN_Labs_Logo.png"
                alt="CN Labs"
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="/solutions" className="text-gray-700 hover:text-orange-600 transition-colors">Solutions</a>
            <a href="/training" className="text-gray-700 hover:text-orange-600 transition-colors">Training</a>
            <a href="/certifications" className="text-gray-700 hover:text-orange-600 transition-colors">Certifications</a>
            <a href="/resources" className="text-gray-700 hover:text-orange-600 transition-colors">Resources</a>
            <a href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About Us</a>
            <a href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Contact</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/solutions"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="/training"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Training
              </a>
              <a
                href="/certifications"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </a>
              <a
                href="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <div className="px-3 py-2">
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="bg-orange-600 hover:bg-orange-700 text-white w-full"
                  >
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;