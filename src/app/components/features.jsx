"use client";

import {
  BookOpen,
  Code2,
  FileCode2,
  FileText,
  Copy,
  Download,
  CheckCircle2,
  Layers3,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Clear, Structured Content",
    description:
      "Every topic is explained step-by-step in short, focused sections so you always know what to learn next.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },

  {
    icon: Code2,
    title: "Real Code & Commands",
    description:
      "Learn by seeing the exact commands, configurations and code you need to use in real projects.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },

  {
    icon: FileCode2,
    title: "Sample Project Files",
    description:
      "Download ready-to-use sample files and configurations and follow along while building your own setup.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },

  {
    icon: FileText,
    title: "Downloadable Notes",
    description:
      "Get concise notes for every module so you can revise important concepts without going through everything again.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function LearningFeatures() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-bold uppercase tracking-[1.8px] text-violet-600">
            Everything You Need
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Learn it.
            <span className="text-violet-600">
              {" "}Understand it.
            </span>
            <br className="hidden sm:block" />
            Build it.
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            We don't just give you content. Every course is designed to
            give you the explanation, code, files and notes you need to
            actually implement what you learn.
          </p>

        </div>


        {/* ================= FEATURE GRID ================= */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">

          {features.map(
            ({
              icon: Icon,
              title,
              description,
              iconBg,
              iconColor,
            }) => (
              <div
                key={title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-[0_3px_15px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-violet-100
                  hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]
                  sm:p-6
                "
              >

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    transition-transform
                    duration-200
                    group-hover:scale-105
                    ${iconBg}
                  `}
                >
                  <Icon
                    className={`h-6 w-6 ${iconColor}`}
                    strokeWidth={2}
                  />
                </div>


                {/* Content */}

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>

              </div>
            )
          )}

        </div>


        {/* ================= LEARNING PREVIEW ================= */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-[0_10px_40px_rgba(15,23,42,0.05)] lg:mt-16">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-6 sm:p-8 lg:p-12">

              <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-600">
                <Layers3 className="h-3.5 w-3.5" />
                Inside Every Module
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Everything is built around
                <span className="text-violet-600">
                  {" "}implementation.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                Read the concept, see the actual implementation,
                copy the commands, download the files and keep the
                notes for revision.
              </p>


              {/* Checklist */}

              <div className="mt-7 space-y-4">

                {[
                  "Short and focused explanations",
                  "Copy-ready code and terminal commands",
                  "Downloadable notes and reference files",
                  "Practical examples for every important concept",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>


            {/* RIGHT — SAMPLE CONTENT */}

            <div className="flex items-center bg-[#0D1117] p-4 sm:p-6 lg:p-8">

              <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161B22] shadow-2xl">

                {/* Terminal Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      deploy.sh
                    </span>

                  </div>

                  <button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 transition hover:bg-white/10 hover:text-white">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>

                </div>


                {/* Code */}

                <pre className="overflow-x-auto p-5 text-xs leading-7 text-slate-300 sm:text-sm">
                  <code>
{`# Update server
sudo apt update

# Install dependencies
npm install

# Build application
npm run build

# Start production server
npm run start`}
                  </code>
                </pre>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            No unnecessary theory
          </div>

          <span className="hidden text-slate-300 sm:block">
            •
          </span>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            No confusing documentation
          </div>

          <span className="hidden text-slate-300 sm:block">
            •
          </span>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            Learn by doing
          </div>

        </div>

      </div>

    </section>
  );
}