import { HiCheckCircle } from 'react-icons/hi2';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Official Documents Ingested',
      description: 'Government policies are securely added to PolicyNav\'s knowledge base with complete audit trails.'
    },
    {
      number: 2,
      title: 'Semantic Conversion',
      description: 'Documents are converted into semantic representations that preserve meaning while enabling AI understanding.'
    },
    {
      number: 3,
      title: 'Smart Retrieval',
      description: 'Relevant policy clauses are retrieved based on user queries using advanced similarity matching.'
    },
    {
      number: 4,
      title: 'Synthesized Responses',
      description: 'AI synthesizes responses strictly from retrieved sources, never adding speculation or assumptions.'
    },
    {
      number: 5,
      title: 'Source-Backed Answers',
      description: 'Users receive clear, cited answers with links back to original policy documents for verification.'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Technical Excellence</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            How PolicyNav Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A transparent, document-grounded AI pipeline that ensures every answer is accurate, sourced, and trustworthy.
          </p>
        </div>
      </section>

      {/* High-Level Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">The PolicyNav Pipeline</h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-8 items-start animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  {/* Step Number */}
                  <div className="shrink-0 w-20 h-20 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div className="ml-10 h-12 border-l-2 border-dashed border-indigo-300 dark:border-indigo-700 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Why This Approach?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'No Hallucination',
                  description: 'Every answer comes directly from official documents. If information doesn\'t exist, we say so.'
                },
                {
                  title: 'Full Transparency',
                  description: 'Users can trace every claim back to the source. No hidden algorithms or mysterious outputs.'
                },
                {
                  title: 'Continuous Accuracy',
                  description: 'When policies update, PolicyNav\'s knowledge updates automatically. No outdated advice.'
                }
              ].map((reason, idx) => (
                <div key={idx} className="space-y-4 p-6 bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <HiCheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture (Non-technical explanation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Under the Hood</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              How PolicyNav stays accurate and trustworthy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Embedding Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Policies are converted to semantic vectors using advanced language models, capturing meaning at a deep level.
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">FAISS Vector Store</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ultra-fast similarity search across policy documents ensures relevant information is found instantly.
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LLM Response Synthesis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Retrieved documents are synthesized into natural language answers while preserving accuracy and sources.
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg"></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Citation & Traceability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every answer includes direct links to source policy sections for independent verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white space-y-6">
          <h2 className="text-4xl font-bold">See the System in Action</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Experience how PolicyNav transforms complex policies into clear, actionable guidance
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Try Agent Now
          </button>
        </div>
      </section>
    </div>
  );
}
