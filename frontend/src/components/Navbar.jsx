import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/LOGO.png"
            alt="Udyara"
            className="h-12 w-12 border-2 border-gray-100 dark:border-slate-700 rounded-lg"
          />
          <span className="text-2xl font-semibold text-teal-700 dark:text-teal-400 tracking-tight">
            Udyara
          </span>
        </div>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <NavLink to="/" className="hover:text-teal-600 transition">
            Home
          </NavLink>
          <NavLink to="/features" className="hover:text-teal-600 transition">
            Features
          </NavLink>
          <NavLink to="/policies" className="hover:text-teal-600 transition">
            Policies
          </NavLink>
          <NavLink to="/about" className="hover:text-teal-600 transition">
            About
          </NavLink>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <NavLink
            to="/agent"
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-xl font-medium transition"
          >
            Try Agent
          </NavLink>
        </div>

        {/* Mobile Hamburger (always static, not part of links) */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <NavLink to="/" onClick={closeMenu} className="block pt-4">
            Home
          </NavLink>
          <NavLink to="/features" onClick={closeMenu} className="block">
            Features
          </NavLink>
          <NavLink to="/policies" onClick={closeMenu} className="block">
            Policies
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="block">
            About
          </NavLink>

          <NavLink
            to="/agent"
            onClick={closeMenu}
            className="block bg-teal-700 text-white px-4 py-2 rounded-lg text-center mt-4"
          >
            Try Agent
          </NavLink>
        </div>
      )}
    </nav>
  );
}
