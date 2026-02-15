"use client"

import {
  AlertTriangle,
  Puzzle,
  TrendingDown,
  ShieldCheck,
  Eye,
  FileSearch,
  Heart,
  FileText,
  Layers,
  Search,
  Users
} from "lucide-react"

export default function About() {

  const accessGap = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-teal-600" />,
      title: "Complex Language",
      desc: "Government schemes are written in dense legal and technical terminology."
    },
    {
      icon: <Puzzle className="w-8 h-8 text-teal-600" />,
      title: "Fragmented Information",
      desc: "Eligibility rules and documentation are scattered across multiple sources."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-teal-600" />,
      title: "Underutilized Benefits",
      desc: "Many eligible women entrepreneurs never apply due to lack of clarity."
    }
  ]


  const transparencyDesign = [
    {
      icon: <FileText className="w-7 h-7 text-teal-600" />,
      title: "Document Grounded",
      desc: "Every output originates directly from indexed policy PDFs."
    },
    {
      icon: <Layers className="w-7 h-7 text-teal-600" />,
      title: "Explainable Structure",
      desc: "Transparent clause references for eligibility, benefits, and documents needed."
    },
    {
      icon: <Search className="w-7 h-7 text-teal-600" />,
      title: "Structured Retrieval",
      desc: "Policy clauses extracted before explanation logic."
    },
    {
      icon: <Users className="w-7 h-7 text-teal-600" />,
      title: "Inclusion-Focused",
      desc: "Designed to reduce systemic access barriers. Built for women-led enterprises"
    }
  ]

  return (
    <div className="bg-white">
      {/* ================= POLICY ACCESS GAP ================= */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="mb-5 text-center text-4xl font-bold text-gray-900 dark:text-white">
              The Policy Access Gap
          </h1>

          <p className="mb-15 text-center text-gray-600 dark:text-gray-400">
            Structural barriers prevent eligible entrepreneurs from accessing government support.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pb-10">
            {accessGap.map((item, i) => (
              <div
                key={i}
                className="
                  p-6 rounded-2xl bg-white
                  border border-gray-200
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_-10px_rgba(20,184,166,0.30)]
                "
              >
                <div className="mb-4">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HOW UDYARA IS DIFFERENT ================= */}
      <section className="py-12">
        <div className="max-w-9xl mx-auto px-20">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT — IMAGE + TEXT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">

              <img
                src="/about.png"
                alt="Trust and transparency"
                className="w-full max-w-md mb-6"
              />

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Udyara is a policy-aware AI agent designed to help women entrepreneurs navigate Indian government startup schemes with clarity and confidence.
              </p>
              <br></br>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                It retrieves official policy documents, interprets eligibility criteria, and provides structured, transparent guidance.
              </p>
              
            </div>


            {/* RIGHT — KEEP YOUR CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {transparencyDesign.map((item, i) => (
                <div
                  key={i}
                  className="
                    p-5 rounded-2xl bg-white
                    border border-gray-200
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_14px_28px_-10px_rgba(20,184,166,0.28)]
                    hover:bg-teal-100/5
                  "
                >
                  <div className="mb-3">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold mb-1 text-base">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
