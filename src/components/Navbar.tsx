import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Workouts', 'Classes', 'Gallery', 'Trainers', 'Membership'];

  return (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled ? 'bg-transparent backdrop-blur-md' : 'bg-transparent py-6'
}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Logo className={`h-8 w-auto ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  theme === 'dark'
                    ? 'text-white hover:text-purple-400'
                    : 'text-gray-700 hover:text-purple-600'
                } transition-colors duration-300`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button className={`hidden md:block px-6 py-2 ${
            theme === 'dark'
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-purple-500 text-white hover:bg-purple-600'
          } rounded-full transition-colors duration-300`}>
            Join Now
          </button>

          <button 
            className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full ${
            theme === 'dark'
              ? 'bg-black/95 backdrop-blur-sm'
              : 'bg-white/95 backdrop-blur-sm'
          } py-4`}>
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    theme === 'dark'
                      ? 'text-white hover:text-purple-400'
                      : 'text-gray-700 hover:text-purple-600'
                  } transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
              <button className={`w-full px-6 py-2 ${
                theme === 'dark'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              } rounded-full transition-colors duration-300`}>
                Join Now
              </button>
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-center p-2 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;