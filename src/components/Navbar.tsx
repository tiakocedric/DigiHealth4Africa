import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-heading font-semibold">
              <span className="text-primary-700">DIGI</span>
              <span className="text-accent-600">HEALTH</span>
              <span className="text-primary-700">4</span>
              <span className="text-accent-600">AFRICA</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#about">À propos</NavLink>
            <NavLink href="#projects">Réalisations</NavLink>
            <NavLink href="#blog">Actualités</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary-700" />
            ) : (
              <Menu className="h-6 w-6 text-primary-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#solutions" onClick={toggleMenu}>Solutions</MobileNavLink>
            <MobileNavLink href="#about" onClick={toggleMenu}>À propos</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Réalisations</MobileNavLink>
            <MobileNavLink href="#blog" onClick={toggleMenu}>Actualités</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => {
  return (
    <a 
      href={href} 
      className="block py-2 text-gray-700 hover:text-primary-600 font-medium text-lg border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;