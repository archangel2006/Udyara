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

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-semibold text-teal-700 dark:text-teal-400 tracking-tight">
          Udyara
        </h1>

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

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <NavLink
            to="/agent"
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-xl font-medium transition"
          >
            Try Agent
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <NavLink to="/" className="block pt-4">Home</NavLink>
          <NavLink to="/features" className="block">Features</NavLink>
          <NavLink to="/policies" className="block">Policies</NavLink>
          <NavLink to="/about" className="block">About</NavLink>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 pt-2"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            Toggle Theme
          </button>

          <NavLink
            to="/agent"
            className="block bg-teal-700 text-white px-4 py-2 rounded-lg text-center mt-2"
          >
            Try Agent
          </NavLink>
        </div>
      )}
    </nav>
  );
}
