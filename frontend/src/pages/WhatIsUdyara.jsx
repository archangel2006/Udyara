import { HiCheckCircle, HiSparkles, HiShieldCheck } from 'react-icons/hi2';

export default function WhatIsUdyara() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">About PolicyNav</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            What is PolicyNav?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A trust-first AI platform designed to transform complex government policies into actionable, citizen-friendly guidance.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            PolicyNav is a Policy Navigation Platform
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            PolicyNav acts as a <span className="font-semibold">digital bridge between policy intent and citizen action</span>. 
            Unlike generic chatbots or advisory tools, PolicyNav interprets official government documents, 
            explains eligibility conditions, and guides users through benefits and next steps using trusted, 
            source-backed AI. Every response is grounded in official policy documents—no hallucination, 
            no speculation, no hidden logic.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-300 dark:border-slate-700">
            <div className="space-y-4">
              <HiSparkles className="text-indigo-600 dark:text-indigo-400" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transparent</h3>
              <p className="text-gray-600 dark:text-gray-400">Every answer is backed by official sources with full visibility into the reasoning process</p>
            </div>
            <div className="space-y-4">
              <HiShieldCheck className="text-purple-600 dark:text-purple-400" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trustworthy</h3>
              <p className="text-gray-600 dark:text-gray-400">Built on responsible AI principles with zero tolerance for fabricated information</p>
            </div>
            <div className="space-y-4">
              <HiCheckCircle className="text-pink-600 dark:text-pink-400" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Actionable</h3>
              <p className="text-gray-600 dark:text-gray-400">Clear, step-by-step guidance that empowers citizens to take informed action</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Address */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">The Problem We Address</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Government Policies Are:</h3>
              <ul className="space-y-4">
                {[
                  'Written in complex legal or bureaucratic language',
                  'Scattered across multiple portals and PDF documents',
                  'Difficult to interpret for first-time applicants',
                  'Updated frequently, creating confusion'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-full mt-1">
                      <span className="text-red-600 dark:text-red-400 font-bold">✕</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">This Results In:</h3>
              <ul className="space-y-4">
                {[
                  'Missed opportunities and overlooked benefits',
                  'Incorrect or incomplete applications',
                  'Underutilization of public funds',
                  'Reduced participation from eligible citizens'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-full mt-1">
                      <span className="text-orange-600 dark:text-orange-400">!</span>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Current Focus</h2>
            <p className="text-lg text-indigo-100 mb-8">
              PolicyNav currently specializes in helping citizens navigate the following policies:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Stand-Up India Scheme',
                desc: 'Bank loans and mentorship for women, SC/ST entrepreneurs',
                status: '✓ Active'
              },
              {
                name: 'Mahila Coir Yojana',
                desc: 'Training, subsidy, and marketing support for women in coir industry',
                status: '🔜 Coming Soon'
              },
              {
                name: 'Mahila e-Haat',
                desc: 'Online marketing platform and grants for women entrepreneurs',
                status: '🔜 Coming Soon'
              },
              {
                name: 'Women MSME Schemes',
                desc: 'Seed funding, credit guarantees for women-owned micro & small enterprises',
                status: '🔜 Coming Soon'
              }
            ].map((policy, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{policy.name}</h3>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 whitespace-nowrap">
                    {policy.status}
                  </span>
                </div>
                <p className="text-indigo-100 text-sm">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust PolicyNav */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Why Trust PolicyNav</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Policy guidance directly impacts financial decisions and livelihoods. We're built on trust-first principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'No Hallucinated Answers',
                description: 'Every response is strictly grounded in official policy documents. If information isn\'t available, we say so.',
                icon: '✓'
              },
              {
                title: 'No Hidden Decision Logic',
                description: 'Users see exactly which policy clauses informed each recommendation—complete transparency.',
                icon: '✓'
              },
              {
                title: 'Never Replaces Authorities',
                description: 'PolicyNav is assistive, not authoritative. We guide; final decisions rest with official institutions.',
                icon: '✓'
              },
              {
                title: 'Source-Backed Answers',
                description: 'Each answer includes citations to official policies, allowing users to verify independently.',
                icon: '✓'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            PolicyNav aims to become a trusted digital bridge between policy intent and citizen action — 
            ensuring that support designed for citizens actually reaches them, <span className="font-semibold">clearly, fairly, and transparently</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
