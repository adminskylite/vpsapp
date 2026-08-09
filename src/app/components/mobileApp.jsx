"use client";

import {
  Smartphone,
  Download,
  CheckCircle2,
  Zap,
  BookOpen,
  FlaskConical,
} from "lucide-react";

export default function MobileAppCTA() {
  return (
    <section className="hidden md:block w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] bg-slate-900 px-8 py-10 sm:px-10 lg:px-14 lg:py-14">

          {/* Background Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">

            {/* ================= LEFT ================= */}

            <div>

              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-300">
                <Smartphone className="h-3.5 w-3.5" />
                Quarlabs Mobile App
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Your learning.
                <br />
                <span className="text-violet-400">
                  Always with you.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Take your courses, notes, deployment labs and learning
                resources with you. Learn whenever and wherever you want
                from the Quarlabs mobile app.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Learn on the go
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Access your courses
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Keep your labs handy
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-300">
                    Quick access anytime
                  </span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">

                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-slate-900
                    shadow-xl
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-slate-100
                  "
                >
                  <Download className="h-5 w-5" />
                  Download Mobile App
                </a>

                <span className="text-xs text-slate-500">
                  Available for Android
                </span>

              </div>

            </div>


            {/* ================= RIGHT APP PREVIEW ================= */}

            <div className="relative flex justify-center lg:justify-end">

              {/* Phone */}

              <div className="relative w-[220px] rounded-[32px] border-[6px] border-slate-700 bg-[#0D1117] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:w-[240px]">

                {/* Speaker / Camera */}
                <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-800" />

                {/* Screen */}
                <div className="overflow-hidden rounded-[24px] bg-white">

                  {/* App Header */}
                  <div className="bg-gradient-to-br from-violet-700 to-purple-500 px-4 pb-5 pt-8">

                    <p className="text-[9px] font-medium text-white/70">
                      Hello 👋
                    </p>

                    <p className="mt-1 text-lg font-extrabold text-white">
                      Welcome to
                    </p>

                    <p className="text-sm font-semibold text-white/90">
                      Quarlabs.ai
                    </p>

                  </div>

                  {/* App Content */}
                  <div className="p-3">

                    <p className="text-[8px] font-bold uppercase tracking-wider text-violet-600">
                      Explore
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900">
                      Categories
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2">

                      <div className="rounded-xl bg-orange-50 p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100">
                          <Zap className="h-4 w-4 text-orange-500" />
                        </div>

                        <p className="mt-2 text-[9px] font-semibold text-slate-800">
                          VPS
                        </p>
                      </div>

                      <div className="rounded-xl bg-violet-50 p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100">
                          <BookOpen className="h-4 w-4 text-violet-500" />
                        </div>

                        <p className="mt-2 text-[9px] font-semibold text-slate-800">
                          AWS
                        </p>
                      </div>

                      <div className="rounded-xl bg-blue-50 p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
                          <FlaskConical className="h-4 w-4 text-blue-500" />
                        </div>

                        <p className="mt-2 text-[9px] font-semibold text-slate-800">
                          Labs
                        </p>
                      </div>

                      <div className="rounded-xl bg-emerald-50 p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
                          ✓
                        </div>

                        <p className="mt-2 text-[9px] font-semibold text-slate-800">
                          Courses
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating Badge */}

              <div className="absolute -left-2 bottom-10 rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 shadow-xl">

                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                  Learn Anywhere
                </p>

                <p className="mt-1 text-xs font-bold text-white">
                  🚀 On the go
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}