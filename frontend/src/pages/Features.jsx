"use client"

import {
  FileText,
  CheckCircle2,
  Gift,
  HeartHandshake,
  Database,
  BookOpen,
  Scale,
  ShieldCheck,
  LayoutList,
  Layers
} from "lucide-react"

export default function Features() {

  const features = [
    {
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      title: "Policy Interpretation",
      desc: "Simplifies complex government documents into clear, understandable language."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600" />,
      title: "Eligibility Verification",
      desc: "Evaluates eligibility conditions transparently without automated decision-making."
    },
    {
      icon: <Gift className="w-5 h-5 text-teal-600" />,
      title: "Benefit Matching",
      desc: "Identifies applicable benefits to ensure nothing relevant is overlooked."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-teal-600" />,
      title: "Application Guidance",
      desc: "Structured support for documentation, submissions, and follow-ups."
    }
  ]

  const capabilities = [
    {
      icon: <Database className="w-4 h-4 text-teal-600" />,
      title: "Retrieval-Augmented Generation (RAG)",
      desc: "Combines semantic vector search with AI explanation grounded in official policy documents."
    },
    {
      icon: <BookOpen className="w-4 h-4 text-teal-600" />,
      title: "Official Policy Indexing",
      desc: "Government PDFs are embedded and stored in a searchable vector database."
    },
    {
      icon: <Scale className="w-4 h-4 text-teal-600" />,
      title: "Eligibility Interpretation",
      desc: "Transforms legal language into structured, actionable guidance."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-teal-600" />,
      title: "Source Transparency",
      desc: "Every response references the relevant clause or policy section."
    },
    {
      icon: <LayoutList className="w-4 h-4 text-teal-600" />,
      title: "Structured Output",
      desc: "Outputs are organized into eligibility, benefits, required documents, and next steps."
    },
    {
      icon: <Layers className="w-4 h-4 text-teal-600" />,
      title: "Scalable Framework",
      desc: "Designed to expand across additional central and state-level schemes."
    }
  ]

  return (
    <div className="bg-white">

      {/* ================= PRIMARY FEATURES ================= */}

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="mb-3 text-center text-4xl font-bold text-gray-900 dark:text-white">
            Key Features
        </h1>

        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          Udyara's capabilities designed for interpreting, evaluating, and navigating government schemes.
        </p>

        <div className="grid md:grid-cols-2 gap-8 pb-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                p-6
                rounded-2xl
                bg-white
                border border-gray-100 border-l-4 border-l-teal-600
                shadow-[0_6px_20px_rgba(20,184,166,0.04)]
                transition-all duration-300
                hover:shadow-[0_10px_28px_rgba(20,184,166,0.06)]
                hover:-translate-y-1
              "
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {f.icon}
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= CAPABILITIES (UNCHANGED SIZE) ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Core Capabilities
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="
                p-5
                rounded-2xl
                bg-white
                border border-gray-200
                hover:shadow-[0_0_20px_0_hsl(173_80%_40%/0.12),0_4px_16px_-4px_hsl(173_80%_40%/0.1)]
                transition-all duration-300
                hover:bg-teal-100/5
                hover:-translate-y-1
              "
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {c.icon}
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
