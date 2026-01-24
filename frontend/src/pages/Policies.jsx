import { useState } from 'react';
import { HiChevronDown, HiCheckCircle, HiClock } from 'react-icons/hi2';

export default function Policies() {
  const [expandedPolicy, setExpandedPolicy] = useState(0);

  const policies = [
    {
      id: 'standup-india',
      name: 'Stand-Up India Scheme',
      status: 'active',
      target: 'Women, SC/ST entrepreneurs',
      benefits: 'Bank loans (₹10L–₹1Cr), mentorship',
      description: 'The Stand-Up India Scheme is a flagship initiative designed to facilitate bank loans to first-generation entrepreneurs to set up greenfield enterprises. The scheme aims to provide a bank loan without collateral security and third-party guarantees.',
      highlights: [
        'Maximum loan amount: ₹1 Crore',
        'No collateral required',
        'Central guarantee coverage up to 85%',
        'Mentorship and counseling support',
        'Available for women, SC/ST entrepreneurs'
      ],
      eligibility: [
        'Indian citizen',
        'First-time/first-generation entrepreneur',
        'Between 18-65 years of age',
        'Belongs to SC/ST category OR is a woman entrepreneur',
        'Not borrowed before for business',
        'Proposed business is new (greenfield)'
      ]
    },
    {
      id: 'mahila-coir',
      name: 'Mahila Coir Yojana',
      status: 'coming-soon',
      target: 'Women in coir industry',
      benefits: 'Training, subsidy, marketing support',
      description: 'Mahila Coir Yojana is designed to support women entrepreneurs in the coir industry through training, financial assistance, and marketing support at both state and central levels.',
      highlights: [
        'Financial assistance for coir-based enterprises',
        'Skills training and capacity building',
        'Marketing and branding support',
        'Access to technology and equipment subsidies',
        'Network building with industry partners'
      ],
      eligibility: [
        'Indian citizen',
        'Woman entrepreneur (above 18 years)',
        'Interest in coir business or related sectors',
        'Can demonstrate commitment to sector'
      ]
    },
    {
      id: 'mahila-ehaat',
      name: 'Mahila e-Haat',
      status: 'coming-soon',
      target: 'Women entrepreneurs',
      benefits: 'Online marketing platform, grants',
      description: 'Mahila e-Haat is an exclusive e-commerce platform that promotes and markets products/services of women entrepreneurs across India, providing them with a digital marketplace.',
      highlights: [
        'Free e-commerce platform',
        'Direct access to national market',
        'Marketing assistance and training',
        'Networking opportunities with buyers',
        'Commission-free or low-commission sales'
      ],
      eligibility: [
        'Woman entrepreneur or WMSME owner',
        'Registered business entity',
        'Products/services meet quality standards',
        'Willing to operate on digital platform'
      ]
    },
    {
      id: 'women-msme',
      name: 'Women MSME Schemes',
      status: 'coming-soon',
      target: 'Women-owned micro, small & medium enterprises',
      benefits: 'Seed funding, credit guarantees, subsidies',
      description: 'Various government schemes specifically designed to support women entrepreneurs in establishing and growing their micro, small, and medium enterprises (MSMEs) across India.',
      highlights: [
        'Collateral-free loans up to specified limit',
        'Subsidies on interest rates',
        'Credit guarantee schemes',
        'Skill development programs',
        'Market linkage support'
      ],
      eligibility: [
        'Woman entrepreneur (minimum 51% ownership)',
        'Engaged in any business sector',
        'Micro, small or medium classification',
        'In operation or proposing new venture'
      ]
    },
    {
      id: 'ugc-startup',
      name: 'UGC / Startup India Programs',
      status: 'coming-soon',
      target: 'Academic & tech women startups',
      benefits: 'Incubation, mentorship, grants',
      description: 'Academic institutions and tech hubs offer incubation programs for women-led startups, focusing on innovation, technology, and scalable business models.',
      highlights: [
        'Incubation support in institutional setup',
        'Mentorship from industry experts',
        'Seed funding and grant opportunities',
        'Infrastructure and lab access',
        'Network of angel investors and VCs'
      ],
      eligibility: [
        'Woman entrepreneur (51%+ stake)',
        'Tech or innovation-based startup',
        'Affiliated with academic institution (if applicable)',
        'Demonstrated potential for scaling'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-block bg-teal-100 dark:bg-teal-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">Supported Schemes</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Government Policies We Cover
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive guidance for women entrepreneurs across multiple government schemes and initiatives
          </p>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {policies.map((policy, idx) => (
            <div
              key={policy.id}
              className="group border-2 border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedPolicy(expandedPolicy === idx ? -1 : idx)}
                className="w-full px-8 py-6 bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between"
              >
                <div className="flex items-start gap-6 text-left">
                  <div className="pt-1">
                    {policy.status === 'active' ? (
                      <HiCheckCircle className="text-green-500" size={28} />
                    ) : (
                      <HiClock className="text-amber-500" size={28} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {policy.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {policy.benefits}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {policy.status === 'active' ? (
                        <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                          ✓ Available Now
                        </span>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full">
                          🔜 Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <HiChevronDown
                  className={`text-gray-600 dark:text-gray-400 transition-transform duration-300 shrink-0 ${expandedPolicy === idx ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>

              {/* Expanded Content */}
              {expandedPolicy === idx && (
                <div className="px-8 py-8 bg-white dark:bg-slate-950 border-t-2 border-gray-200 dark:border-slate-800 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {policy.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Highlights */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Key Benefits</h4>
                      <ul className="space-y-3">
                        {policy.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="shrink-0 w-2 h-2 bg-teal-600 rounded-full mt-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        {policy.eligibility.map((criteria, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {policy.status === 'active' && (
                    <div className="pt-6 border-t border-gray-200 dark:border-slate-800">
                      <button className="px-6 py-3 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Check Eligibility with Agent
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Future Roadmap Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-teal-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">More Coming Soon</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We're continuously expanding Udyara to cover more government schemes:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'MUDRA Scheme for micro-financing',
              'PMEGP for manufacturing & service sectors',
              'State-specific women entrepreneurship schemes',
              'Multilingual policy support',
              'Voice-based query interface',
              'Verified document checking'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 bg-teal-600 rounded-full mt-2"></span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-r from-teal-600 to-teal-700 rounded-3xl p-12 text-white space-y-6">
          <h2 className="text-4xl font-bold">Find Your Perfect Policy Match</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Let Udyara help you identify which schemes you qualify for and guide you through the application process
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Policy Navigation
          </button>
        </div>
      </section>
    </div>
  );
}
