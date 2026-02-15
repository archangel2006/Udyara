import { Link } from "react-router-dom";

import {
  ArrowRight,
  FileText,
  CheckCircle,
  Eye,
  MessageSquare,
  Search,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">

      <div className="flex-grow">

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              Designed for Indian Government Schemes
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Trust-Based AI for Women Entrepreneurs
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Udyara helps you understand, verify, and navigate Indian government
              startup schemes using transparent, document-grounded AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/agent"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
              >
                Check Scheme Eligibility
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/policies"
                className="border border-gray-300 dark:border-gray-700 rounded-xl px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              >
                View Supported Policies
              </Link>
            </div>
          </div>

          <div className="bg-teal-50 dark:bg-gray-800 rounded-2xl p-6 flex justify-center">
            <img
              src="/hero.png"
              alt="Woman reviewing government documents"
              className="max-h-[380px] object-contain"
            />
          </div>
        </section>


        {/* ================= HOW UDYARA HELPS YOU ================= */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
              How Udyara Helps You
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Document-Grounded Answers",
                  desc: "Every response is based on official government policy documents, not guesswork.",
                },
                {
                  icon: CheckCircle,
                  title: "Clear Eligibility Guidance",
                  desc: "Understand whether you qualify, why you qualify, and what to prepare next.",
                },
                {
                  icon: Eye,
                  title: "Transparent Decision Support",
                  desc: "See the relevant clauses, benefits, and required documents in a structured format.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group rounded-2xl p-8 transition-all duration-300 bg-white
                border border-gray-200
                hover:shadow-[0_0_20px_0_hsl(173_80%_40%/0.12),0_4px_16px_-4px_hsl(173_80%_40%/0.1)]
                hover:bg-teal-100/5
                dark:bg-gray-900  dark:border-gray-800
                  hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal-10 dark:bg-teal-900/40 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12">
                      <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ================= HOW IT WORKS ================= */}
        <section className="py-10  border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-14">
              How It Works
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-800"></div>

              <div className="grid md:grid-cols-3 gap-10 relative">
                {[
                  {
                    icon: MessageSquare,
                    title: "Ask",
                    desc: "Ask a question about a government scheme in simple language."
                  },
                  {
                    icon: Search,
                    title: "Check",
                    desc: "Udyara retrieves official policy clauses using secure vector search."
                  },
                  {
                    icon: Zap,
                    title: "Act",
                    desc: "Receive structured eligibility results, benefits, and next steps."
                  }
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="group flex flex-col items-center">

                      <div className="
                        relative z-10 w-16 h-16 rounded-full 
                        bg-white dark:bg-gray-900
                        border-2 border-teal-600 
                        flex items-center justify-center 
                        shadow-sm
                        transition-all duration-500
                        group-hover:shadow-lg
                      ">
                        <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400 transition-transform duration-500 group-hover:scale-x-[-1]" />
                      </div>

                      <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-gray-600 dark:text-gray-400 max-w-xs text-base leading-relaxed">
                        {step.desc}
                      </p>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

      {/* ================= CTA Section ================= */}
      <section className="py-6 px-4 max-w-7xl mx-auto text-center">
        <div className="space-y-7 animate-in fade-in duration-700">

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Navigate Policies?
          </h2>

          {/*<p className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start with our AI agent and discover benefits you may qualify for.
          </p>*/}

          <div className="flex flex-col sm:flex-row gap-6 justify-center pb-10">
            
            <Link
              to="/agent"
              className="group inline-flex items-center justify-center px-6 
                bg-teal-700 hover:bg-teal-800 text-white 
                rounded-xl font-semibold transition-all duration-300 
                hover:shadow-lg hover:scale-102"
            >
              Launch AI Agent
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </Link>

            <Link
              to="/policies"
              className="inline-flex items-center justify-center px-8 py-4 
                border-2 border-gray-300 dark:border-slate-700 
                text-gray-900 dark:text-white rounded-xl font-semibold 
                hover:bg-gray-50 dark:hover:bg-slate-900 transition-all duration-300"
            >
              Explore All Policies
            </Link>

          </div>

        </div>
      </section>

      </div>


    </div>
  );
}
