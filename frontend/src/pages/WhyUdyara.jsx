import { HiCheckCircle, HiXMark } from 'react-icons/hi2';

export default function WhyUdyara() {
  const comparison = [
    {
      category: 'Hallucination',
      generic: 'Makes things up or generalizes',
      policynav: 'Every answer grounded in official documents'
    },
    {
      category: 'Accuracy',
      generic: 'Can be wrong or outdated',
      policynav: 'Updated with policy changes automatically'
    },
    {
      category: 'Transparency',
      generic: 'You don\'t know why it said something',
      policynav: 'Full citations to source documents'
    },
    {
      category: 'Authority',
      generic: 'Makes recommendations as if they\'re decisions',
      policynav: 'Assistive only; decisions stay with authorities'
    },
    {
      category: 'Use Case',
      generic: 'General-purpose chat',
      policynav: 'Policy-specific expert guidance'
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Trust-First Design</p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Why Choose PolicyNav?</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">We're not just another chatbot. We're a policy-expert system built on principles of trust, transparency, and accuracy.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">PolicyNav vs. Generic Chatbots</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-slate-800">
                  <th className="px-6 py-4 font-bold text-gray-900 dark:text-white">Aspect</th>
                  <th className="px-6 py-4 font-bold text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <HiXMark className="text-red-500" size={20} />
                      Generic Chatbots
                    </span>
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    <span className="flex items-center gap-2">
                      <HiCheckCircle className="text-green-500" size={20} />
                      PolicyNav
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-slate-900 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{row.category}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.generic}</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">{row.policynav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white space-y-6">
          <h2 className="text-4xl font-bold">Ready to Trust the Process?</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">Experience policy guidance that's transparent, accurate, and built for citizens like you</p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">Try PolicyNav Now</button>
        </div>
      </section>
    </div>
  );
}
