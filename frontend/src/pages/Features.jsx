import { HiMagnifyingGlass, HiCheckBadge, HiSparkles, HiQuestionMarkCircle } from 'react-icons/hi2';

export default function Features() {
  const features = [
    {
      icon: HiSparkles,
      title: 'Policy Interpretation',
      description: 'Simplifies complex government documents into clear, understandable explanations. Users receive plain-language interpretations of policy clauses, eligibility rules, and procedural steps without altering the original meaning.',
      highlight: 'Clarity Without Compromise'
    },
    {
      icon: HiMagnifyingGlass,
      title: 'Eligibility Verification',
      description: 'Evaluates user-provided information against official eligibility criteria to indicate whether a scheme may apply. Highlights which conditions are met and which may require attention.',
      highlight: 'Know Your Fit'
    },
    {
      icon: HiCheckBadge,
      title: 'Benefit Matching',
      description: 'Identifies all relevant benefits within a policy that you may qualify for, ensuring no applicable incentives are overlooked. Future versions expand across multiple schemes and agencies.',
      highlight: 'Maximize Your Benefits'
    },
    {
      icon: HiQuestionMarkCircle,
      title: 'Citizen Advocacy & Guidance',
      description: 'Provides structured guidance on required documents, application steps, common rejection reasons, and corrective actions. Empowers users to engage confidently with institutions.',
      highlight: 'Support At Every Step'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-block bg-teal-100 dark:bg-teal-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">Core Capabilities</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Powerful Features Built for Citizens
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Udyara combines AI interpretation, eligibility verification, and guided support to transform bureaucracy into clarity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-10 rounded-2xl bg-gray-50 dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-xl dark:hover:shadow-teal-900/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                      <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Features Work Together */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-teal-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              How Features Work Together
            </h2>

            <div className="grid md:grid-cols-4 gap-6 py-12">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-linear-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">You Ask</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Share your profile & questions</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-3xl text-teal-600 dark:text-teal-400 hidden md:block">→</div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">We Interpret</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analyze policies & your fit</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-3xl text-teal-600 dark:text-teal-400 hidden md:block">→</div>
              </div>

              <div className="text-center space-y-4 md:col-span-2">
                <div className="w-20 h-20 mx-auto bg-linear-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-2xl\">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">You Win</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get clear guidance & take action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Real-World Use Cases</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See how Udyara helps citizens like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                scenario: 'First-time Founder',
                query: '"Am I eligible for Stand-Up India as a woman founder?"',
                benefit: 'Gets clarity on eligibility criteria and next steps'
              },
              {
                scenario: 'Confused Applicant',
                query: '"What documents are required for my application?"',
                benefit: 'Receives complete, policy-backed document checklist'
              },
              {
                scenario: 'Rejected Applicant',
                query: '"Why was my application rejected? What can I do?"',
                benefit: 'Understands rejection reasons & available appeals'
              }
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                    <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                      {useCase.scenario}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                    {useCase.query}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Udyara delivers:</span> {useCase.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-white space-y-6">
          <h2 className="text-4xl font-bold">Experience These Features Firsthand</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Launch our AI agent and explore how these capabilities can help you navigate policies
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Try Agent Now
          </button>
        </div>
      </section>
    </div>
  );
}