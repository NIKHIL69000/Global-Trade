import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Anchor } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Import', href: '#import' },
  { label: 'Export', href: '#export' },
  { label: 'Global', href: '#global' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky header
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Anchor className={`h-8 w-8 ${isScrolled ? 'text-secondary' : 'text-secondary bg-white rounded p-1'}`} />
            <span className={`ml-2 text-xl font-bold tracking-wide ${isScrolled ? 'text-primary' : 'text-white shadow-black drop-shadow-md'}`}>
              Global<span className="text-secondary">Trade</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                  activeSection === item.href.substring(1)
                    ? 'text-secondary border-b-2 border-secondary'
                    : isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
               href="#contact"
               onClick={(e) => handleClick(e, '#contact')}
               className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Enquiry
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700 hover:text-secondary' : 'text-white hover:text-gray-200'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-secondary bg-green-50'
                    : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="block w-full text-center mt-4 bg-secondary text-white px-3 py-3 rounded-md font-medium hover:bg-emerald-700"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
