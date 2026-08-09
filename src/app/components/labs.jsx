"use client";

import {
  FlaskConical,
  Sparkles,
  Server,
  Cloud,
  Terminal,
  Save,
  Download,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  FileCode2,
} from "lucide-react";

export default function DeploymentLabs() {
  return (
    <section className="hidden md:block w-full bg-white py-16 sm:py-20 lg:py-28">

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-600">
            <FlaskConical className="h-3.5 w-3.5" />
            Deployment Labs
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Don't just learn.
            <span className="text-violet-600">
              {" "}Build your own Lab.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Create a real deployment setup, customize it with AI,
            save it for later and generate the CI/CD pipeline when
            you're ready to automate it.
          </p>

        </div>


        {/* ================= MAIN PRODUCT PREVIEW ================= */}

        <div className="relative mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8fafc] shadow-[0_20px_70px_rgba(15,23,42,0.08)] lg:mt-16">

          {/* Background glow */}

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />


          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">


            {/* ================= LEFT SIDEBAR ================= */}

            <div className="border-b border-slate-200 bg-white p-6 lg:border-b-0 lg:border-r lg:p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
                  <FlaskConical className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Create a Lab
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Build your deployment setup
                  </p>
                </div>

              </div>


              {/* Steps */}

              <div className="mt-8 space-y-3">

                {/* Step 1 */}

                <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-violet-500">
                    Step 01
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    What are you deploying?
                  </p>

                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-700">
                    <FileCode2 className="h-4 w-4 text-violet-500" />
                    Next.js Application
                    <CheckCircle2 className="ml-auto h-4 w-4 text-emerald-500" />
                  </div>

                </div>


                {/* Step 2 */}

                <div className="rounded-xl border border-slate-100 bg-white p-4">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Step 02
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Where will you deploy?
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2">

                    <div className="flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2.5 text-xs font-semibold text-violet-700">
                      <Server className="h-4 w-4" />
                      VPS
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500">
                      <Cloud className="h-4 w-4" />
                      Cloud
                    </div>

                  </div>

                </div>


                {/* Step 3 */}

                <div className="rounded-xl border border-slate-100 bg-white p-4">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Step 03
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Customize with AI
                  </p>

                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs text-slate-500">

                    <Sparkles className="h-4 w-4 text-violet-500" />

                    Tell AI what you need

                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT LAB ================= */}

            <div className="p-5 sm:p-7 lg:p-8">

              {/* Lab Header */}

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600">
                    Active Lab
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Next.js → VPS Deployment
                  </h3>

                </div>

                <div className="flex items-center gap-2">

                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                    <Save className="h-3.5 w-3.5" />
                    Save
                  </button>

                  <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                    <Download className="h-3.5 w-3.5" />
                    Export
                  </button>

                </div>

              </div>


              {/* Command Terminal */}

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1117] shadow-xl">

                {/* Terminal Header */}

                <div className="flex items-center justify-between border-b border-white/10 bg-[#161B22] px-4 py-3">

                  <div className="flex items-center gap-2">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      deploy.sh
                    </span>

                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <Terminal className="h-3.5 w-3.5" />
                    Commands
                  </div>

                </div>


                {/* Commands */}

                <pre className="overflow-x-auto p-5 text-xs leading-7 text-slate-300 sm:text-sm">
                  <code>
{`# Install dependencies
npm install

# Build application
npm run build

# Start with PM2
pm2 start npm --name "next-app" -- start

# Configure Nginx
sudo nano /etc/nginx/sites-available/next-app

# Enable configuration
sudo ln -s /etc/nginx/sites-available/next-app \\
/etc/nginx/sites-enabled/`}
                  </code>
                </pre>

              </div>


              {/* ================= AI HELP ================= */}

              <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/60 p-4 sm:p-5">

                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md shadow-violet-200">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex flex-wrap items-center gap-2">

                      <p className="text-sm font-bold text-slate-900">
                        AI Lab Assistant
                      </p>

                      <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-bold uppercase text-violet-600">
                        AI
                      </span>

                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Tell us what you need and we'll adapt the
                      deployment steps for your setup.
                    </p>


                    {/* AI Requirement */}

                    <div className="mt-4 flex items-center gap-2 rounded-xl border border-violet-100 bg-white p-2">

                      <input
                        readOnly
                        value="Add Docker, Nginx and SSL to this deployment"
                        className="min-w-0 flex-1 bg-transparent px-2 py-2 text-xs text-slate-600 outline-none"
                      />

                      <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
                        <ArrowRight className="h-4 w-4" />
                      </button>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================= CI/CD ================= */}

              <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <GitBranch className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Deployment complete?
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Generate a CI/CD pipeline for this lab.
                    </p>

                  </div>

                </div>

                <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">

                  <GitBranch className="h-4 w-4" />

                  Add CI/CD Pipeline

                  <ArrowRight className="h-3.5 w-3.5" />

                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM FLOW ================= */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-600">

          <span className="rounded-full bg-violet-50 px-4 py-2 text-violet-600">
            01 Create Lab
          </span>

          <ArrowRight className="h-4 w-4 text-slate-300" />

          <span className="rounded-full bg-violet-50 px-4 py-2 text-violet-600">
            02 Customize with AI
          </span>

          <ArrowRight className="h-4 w-4 text-slate-300" />

          <span className="rounded-full bg-violet-50 px-4 py-2 text-violet-600">
            03 Deploy
          </span>

          <ArrowRight className="h-4 w-4 text-slate-300" />

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-600">
            04 Generate CI/CD
          </span>

        </div>


        {/* ================= TAGLINE ================= */}

        <div className="mt-8 text-center">

          <p className="text-sm text-slate-400">
            From learning a deployment to building your own
            <span className="font-semibold text-slate-600">
              {" "}repeatable workflow.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}