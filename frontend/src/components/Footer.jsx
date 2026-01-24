import { Link } from 'react-router-dom';
import { HiEnvelope, HiGlobeAlt } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 dark:text-gray-400 border-t border-gray-800 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-white">Udyara</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Trust-based AI for navigating government policies with transparency and accuracy.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="mailto:hello@Udyara.in" className="hover:text-teal-400 transition-colors">
                <HiEnvelope size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <HiGlobeAlt size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/what-is-udyara" className="hover:text-teal-400 transition-colors">
                  About Udyara
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-teal-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-teal-400 transition-colors">
                  Supported Policies
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-teal-400 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/why-udyara" className="hover:text-teal-400 transition-colors">
                  Why Trust Udyara
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 Udyara · Empowering Citizens Through Transparent Policy Guidance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
