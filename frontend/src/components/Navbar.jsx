import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3, HiXMark, HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/what-is-udyara', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/why-udyara', label: 'Why Trust Us' },
    { path: '/policies', label: 'Policies' },
    { path: '/roadmap', label: 'Roadmap' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-lg dark:shadow-xl border-b dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-linear-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Udyara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section: Theme Toggle & CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-200 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>

            {/* CTA Button */}
            <Link
              to="/chatbot"
              className="hidden sm:inline px-4 py-2 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Try Agent
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            >
              {isOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/chatbot"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg font-medium hover:shadow-lg transition-all text-center"
            >
              Try Agent
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}