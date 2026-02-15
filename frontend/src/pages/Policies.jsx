import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Globe,
  FileText,
  Landmark,
  GraduationCap,
  Store,
  Briefcase,
  Banknote,
  Utensils,
  Rocket
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

const policies = [
  {
    title: "Stand-Up India Scheme",
    category: "Loan Scheme",
    icon: Banknote,
    summary:
      "A government scheme that helps women and SC/ST entrepreneurs get bank loans to start a new business.",

    highlights: [
      "Type: Loan Scheme",
      "Loan Amount: ₹10 lakh – ₹1 crore",
      "Eligibility: Women or SC/ST entrepreneurs (minimum 51% ownership required)",
      "Purpose: Starting a new manufacturing, service, or trading business",
      "Repayment: Up to 7 years + interest as per bank norms",
    ],

    website: "https://www.standupmitra.in/",
    pdf: "https://www.standupmitra.in/Home/SUISchemes",
  },

  {
    title: "Mudra Yojana (PMMY)",
    category: "Credit Support",
    icon: Landmark,
    summary:
      "A scheme that provides small business loans to women and other entrepreneurs without collateral.",

    highlights: [
      "Type: Loan Scheme",
      "Loan Amount: Up to ₹10 lakh (Shishu, Kishor, Tarun categories)",
      "Eligibility: Non-corporate small businesses including women entrepreneurs",
      "Purpose: Starting or expanding small businesses",
      "Repayment: 3–5 years + interest decided by bank",
    ],

    website: "https://www.mudra.org.in/",
    pdf: "https://www.mudra.org.in/Home/PMMYBankersKit",
  },

  {
    title: "Mahila Coir Yojana",
    category: "Skill Developement",
    icon: GraduationCap,
    summary:
      "A scheme that supports rural women with training and equipment to start work in the coir industry.",

    highlights: [
      "Type: Training + Subsidy Scheme",
      "Grant Amount: 75% subsidy on motorized spinning machines",
      "Eligibility: Rural women interested in coir-based work",
      "Purpose: Setting up small coir production or spinning units",
      "Repayment: Not required",
    ],

    website: "https://coirboard.gov.in/",
    pdf: "https://coirboard.gov.in/wp-content/uploads/2021/08/Mahila-Coir-Yojana.pdf",
  },

  {
    title: "Mahila e-Haat",
    category: "Digital Platform",
    icon: Store,
    summary:
      "An online platform where women entrepreneurs and self-help groups can sell their products directly to customers.",

    highlights: [
      "Type: Online Selling Platform",
      "Loan / Grant: No loan (market access support)",
      "Eligibility: Women entrepreneurs and SHGs",
      "Purpose: Selling products directly to customers online",
      "Additional Support: Free online storefront, promotion, and logistics support",
      "Repayment: Not applicable",
    ],

    website: "https://mahilaehaat-rmk.gov.in/",
    pdf: "https://wcd.nic.in/sites/default/files/Mahila%20E-haat%20Scheme.pdf",
  },

  {
    title: "Annapurna Scheme (For Women Entrepreneurs)",
    category: "Credit Support",
    icon: Utensils,
    summary:
      "A loan scheme for women who want to start or expand food catering businesses.",

    highlights: [
      "Type: Loan Scheme",
      "Loan Amount: Up to ₹50,000",
      "Eligibility: Women starting small food or catering businesses",
      "Purpose: Buying kitchen equipment and working capital",
      "Repayment: Up to 3 years + interest as per bank norms",
    ],

    website: "https://www.standupmitra.in/",
    pdf: "https://www.standupmitra.in/Home/SUISchemes",
  },

  {
    title: "Startup India Scheme",
    category: "Startup Ecosystem",
    icon: Briefcase,
    summary:
      "A national startup program that supports innovation and provides recognition and funding access to eligible startups.",

    highlights: [
      "Type: Startup Support Program",
      "Funding Support: Access to seed funding and government-backed funds",
      "Eligibility: DPIIT-recognized startups including women-led startups",
      "Purpose: Building and scaling innovative businesses",
      "Repayment: Depends on funding type (loan, grant, or equity-based support)",
    ],

    website: "https://www.startupindia.gov.in/",
    pdf: "https://www.startupindia.gov.in/content/sih/en/startup-schemes.html",
  },
];


export default function Policies() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24">

        <h1 className="mb-3 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Government Schemes for Women Entrepreneurs
        </h1>

        <p className="mb-14 text-center text-gray-600 dark:text-gray-400">
          Browse some key central government schemes that support women-led businesses.
        </p>

        <div className="space-y-6">
          {policies.map((policy, i) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={policy.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                {/* LEFT ACCENT BAR */}
                <div className="flex">
                  <div className="w-1 bg-teal-600"></div>

                  <div className="flex-1">

                    <button
                      onClick={() =>
                        setExpanded(expanded === i ? null : i)
                      }
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                          <Icon className="w-5 h-5 text-teal-700 dark:text-teal-300" />
                        </div>

                        <div>
                          <p className="text-xs text-teal-700 dark:text-teal-400 font-medium mb-1">
                            {policy.category}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {policy.title}
                          </h3>
                        </div>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          expanded === i ? "rotate-180 text-teal-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-6 pb-6"
                        >
                          <div className="pl-16">

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                              {policy.summary}
                            </p>

                            <ul className="space-y-3 mb-6">
                              {policy.highlights.map((h) => (
                                <li
                                  key={h}
                                  className="text-sm text-gray-800 dark:text-gray-200"
                                >
                                  {h}
                                </li>
                              ))}
                            </ul>

                            <div className="flex gap-6 text-sm mb-6">
                              <a
                                href={policy.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-teal-700 hover:text-teal-800 transition"
                              >
                                <Globe size={16} />
                                Official Portal
                              </a>

                              <a
                                href={policy.pdf}
                                target="_blank"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
                              >
                                <FileText size={16} />
                                Scheme Guidelines
                              </a>
                            </div>

                            <Link
                              to={`/agent?q=${encodeURIComponent(policy.query)}`}
                              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-md text-sm font-medium transition"
                            >
                              Check Eligibility with Agent →
                            </Link>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
