import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiSparkles, HiShieldCheck, HiUsers } from 'react-icons/hi2';

export default function Home() {
  const problems = [
    {
      icon: HiSparkles,
      title: 'Complex Policies',
      description: 'Government policies written in bureaucratic language that\'s hard to understand'
    },
    {
      icon: HiUsers,
      title: 'Missed Benefits',
      description: 'Citizens often miss out on support they\'re entitled to'
    },
    {
      icon: HiShieldCheck,
      title: 'Opacity & Confusion',
      description: 'Information scattered across multiple agencies and portals'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="space-y-4">
              <div className="inline-block bg-teal-100 dark:bg-teal-900/30 px-4 py-2 rounded-full">
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">🚀 Empowering Citizens Nationwide</p>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                <span className="bg-linear-to-r from-teal-600 via-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Policy Navigator
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                Transform complex government policies into actionable guidance. <span className="font-semibold text-gray-900 dark:text-white">Trust-backed AI</span> helping citizens access benefits they deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/chatbot"
                className="group inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Try Agent Now
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/what-is-udyara"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="relative w-full max-w-md">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-linear-to-r from-teal-400 via-teal-400 to-teal-500 rounded-3xl blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>
              <div className="relative bg-linear-to-br from-teal-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 shadow-2xl dark:shadow-teal-900/30 border border-gray-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="h-40 bg-linear-to-r from-teal-400 to-teal-500 rounded-2xl"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded-lg w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded-lg w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">The Challenge</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Citizens struggle with bureaucratic opacity, missing vital benefits and support they're entitled to
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-xl dark:hover:shadow-teal-900/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-teal-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Solution</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Udyara acts as your personal policy advocate, simplifying complexity and ensuring no eligible citizen is left behind.
              </p>
              <div className="space-y-4 pt-4">
                {['Policy Interpretation', 'Eligibility Verification', 'Benefit Matching', 'Application Guidance'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <HiCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0" size={24} />
                    <span className="text-gray-900 dark:text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-teal-400 via-teal-400 to-teal-500 rounded-2xl blur-3xl opacity-20 dark:opacity-10"></div>
              <div className="relative bg-white dark:bg-slate-950 rounded-2xl p-8 shadow-xl dark:shadow-xl border border-gray-200 dark:border-slate-800">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-teal-600 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-slate-800 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-300 dark:bg-slate-700 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="space-y-8 animate-in fade-in duration-700">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Ready to Navigate Policies?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start with our AI agent and discover benefits you may qualify for
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/chatbot"
              className="group inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Launch ChatBot
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/policies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-900 transition-all duration-300"
            >
              Explore All Policies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}