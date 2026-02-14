import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-10 lg:px-20 py-8">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Brand */}
          <div className="max-w-lg">
            <h3 className="text-lg font-semibold text-teal-600 mb-3">
              Udyara
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Trust-based AI helping women entrepreneurs understand and
              navigate Indian government schemes with transparency.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 text-sm">

            <div>
              <h4 className="font-semibold text-teal-600 mb-3">
                Platform
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link to="/" className="hover:text-teal-600 transition-colors">Home</Link></li>
                <li><Link to="/agent" className="hover:text-teal-600 transition-colors">Check Eligibility</Link></li>
                <li><Link to="/features" className="hover:text-teal-600 transition-colors">Features</Link></li>
                <li><Link to="/policies" className="hover:text-teal-600 transition-colors">Policies Covered</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-teal-600 mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><Link to="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-teal-600 mb-3">
                Contact
              </h4>
              <div className="space-y-1 text-gray-600 dark:text-gray-400">
                <p>support@udyara.in</p>
                <p>New Delhi, India</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Ribbon */}
        <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700 text-center text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Udyara. All rights reserved.
          <span className="mx-2 text-gray-400">•</span>
          Built for transparent access to public schemes.
        </div>

      </div>
    </footer>
  );
}
