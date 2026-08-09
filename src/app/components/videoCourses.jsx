"use client";

import {
  PlayCircle,
  Video,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function VideoCourseCTA() {
  return (
    <section className="hidden md:block w-full bg-white ">

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-violet-100
            bg-gradient-to-br
            from-violet-50
            via-white
            to-purple-50
            p-8
            sm:p-10
            lg:p-14
          "
        >

          {/* Background Glow */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />


          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">


            {/* ================= LEFT ================= */}

            <div>

              {/* Label */}

              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-600 shadow-sm">

                <Video className="h-3.5 w-3.5" />

                Prefer Video Learning?

              </div>


              {/* Heading */}

              <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

                Text not enough?

                <br />

                <span className="text-violet-600">
                  Learn it through video.
                </span>

              </h2>


              {/* Description */}

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">

                If you prefer watching someone explain things step-by-step,
                jump into our complete video courses on Udemy and learn
                everything through practical demonstrations.

              </p>


              {/* Benefits */}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                  <span className="text-sm font-medium text-slate-700">
                    Step-by-step video lessons
                  </span>
                </div>


                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                  <span className="text-sm font-medium text-slate-700">
                    Practical demonstrations
                  </span>
                </div>


                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                  <span className="text-sm font-medium text-slate-700">
                    Learn at your own pace
                  </span>
                </div>


                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                  <span className="text-sm font-medium text-slate-700">
                    Lifetime course access
                  </span>
                </div>

              </div>


              {/* CTA */}

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-violet-600
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-violet-200
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-violet-700
                  "
                >
                  <PlayCircle className="h-5 w-5" />

                  Watch the Video Course

                  <ExternalLink className="h-4 w-4" />
                </a>

              </div>

            </div>


            {/* ================= RIGHT PRICE CARD ================= */}

            <div className="relative mx-auto w-full max-w-sm">

              <div
                className="
                  rounded-[24px]
                  border
                  border-white
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(76,29,149,0.12)]
                "
              >

                {/* Video Icon */}

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                    <PlayCircle className="h-8 w-8 text-violet-600" />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                    Available
                  </span>

                </div>


                {/* Price */}

                <div className="mt-7">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Complete Video Course
                  </p>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-4xl font-extrabold text-slate-900">
                      ₹499
                    </span>

                    <span className="mb-1 text-sm text-slate-400">
                      only
                    </span>

                  </div>

                </div>


                {/* Divider */}

                <div className="my-6 h-px bg-slate-100" />


                {/* Bottom */}

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                    🎓
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-slate-800">
                      Learn visually
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Watch. Follow. Build.
                    </p>

                  </div>

                </div>

              </div>


              {/* Floating Badge */}

              <div className="absolute -right-4 -top-4 rounded-2xl bg-slate-900 px-4 py-3 shadow-xl">

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Video Learning
                </p>

                <p className="mt-0.5 text-sm font-bold text-white">
                  ₹499 🚀
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}