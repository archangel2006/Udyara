import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2';

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: 'Phase 1: Foundation',
      status: 'completed',
      timeline: 'Q4 2024',
      items: [
        'Stand-Up India Scheme coverage',
        'RAG pipeline implementation',
        'Core eligibility verification',
        'API & basic UI launch'
      ]
    },
    {
      phase: 'Phase 2: Expansion',
      status: 'in-progress',
      timeline: 'Q1 2025',
      items: [
        'Mahila Coir Yojana integration',
        'Mahila e-Haat platform coverage',
        'Women MSME schemes addition',
        'Enhanced UI with dark mode'
      ]
    },
    {
      phase: 'Phase 3: Scale',
      status: 'upcoming',
      timeline: 'Q2 2025',
      items: [
        'MUDRA Scheme for micro-financing',
        'PMEGP for manufacturing sectors',
        'Multi-language support (Hindi, regional)',
        'Mobile app launch'
      ]
    },
    {
      phase: 'Phase 4: Innovation',
      status: 'upcoming',
      timeline: 'Q3 2025',
      items: [
        'Voice-based query interface',
        'Verified document checking',
        'State-specific policy mapping',
        'AI-powered document assistance'
      ]
    },
    {
      phase: 'Phase 5: Impact',
      status: 'upcoming',
      timeline: 'Q4 2025+',
      items: [
        'Coverage of 25+ government schemes',
        'Verifiable credentials system',
        'Analytics & impact measurement',
        'Integration with official portals'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Future Vision</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            PolicyNav Roadmap
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From Stand-Up India to nationwide policy guidance—our journey to democratize government benefits
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {roadmapItems.map((item, idx) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';
            const isUpcoming = item.status === 'upcoming';

            return (
              <div key={idx} className="relative">
                {/* Timeline connector */}
                {idx < roadmapItems.length - 1 && (
                  <div className="absolute left-12 top-32 h-8 border-l-2 border-dashed border-indigo-300 dark:border-indigo-700"></div>
                )}

                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isInProgress
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <HiCheckCircle size={40} />
                      ) : isInProgress ? (
                        <span className="animate-spin">◐</span>
                      ) : (
                        <HiArrowRight size={40} />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-4 pb-8">
                    <div
                      className={`p-8 rounded-2xl border-2 transition-all ${
                        isCompleted
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800'
                          : isInProgress
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-400 dark:border-indigo-600'
                          : 'bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {item.phase}
                          </h3>
                          <p className={`text-sm font-semibold mt-1 ${
                            isCompleted
                              ? 'text-green-700 dark:text-green-400'
                              : isInProgress
                              ? 'text-indigo-700 dark:text-indigo-400'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {item.status === 'completed'
                              ? '✓ Completed'
                              : item.status === 'in-progress'
                              ? '● In Progress'
                              : '◯ Upcoming'}
                          </p>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          isCompleted
                            ? 'bg-green-200 dark:bg-green-900/50 text-green-900 dark:text-green-300'
                            : isInProgress
                            ? 'bg-indigo-200 dark:bg-indigo-900/50 text-indigo-900 dark:text-indigo-300'
                            : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300'
                        }`}>
                          {item.timeline}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {item.items.map((subItem, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">{subItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Our Long-Term Vision
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  From Scheme Coverage to Impact
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We're not just building a tool—we're building a movement. PolicyNav will eventually cover every major government scheme that helps citizens, ensuring no one is left behind due to bureaucratic complexity.
                </p>
                <div className="space-y-3">
                  {[
                    'Cover 50+ government schemes by 2026',
                    'Support 10+ Indian languages',
                    'Reach 1M+ citizens annually',
                    'Reduce application rejection rates by 40%',
                    'Enable ₹1000+ Crore in benefits reach'
                  ].map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Why We're Serious
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Government policies lose billions in unutilized funds annually because eligible citizens don't know or can't navigate bureaucratic processes. PolicyNav is built to solve this systemic problem.
                </p>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    ₹1000+ Cr
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Potential annual benefit reach by 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white space-y-6">
          <h2 className="text-4xl font-bold">Join Us on This Journey</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Be part of the movement to democratize government benefits and support. Try PolicyNav today.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
