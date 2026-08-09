"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Smartphone,
  Rocket,
  BookOpen,
  FlaskConical,
  Plane
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D1117] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-3xl" />

      <div className="absolute -bottom-40 left-[-120px] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-3xl" />

      {/* Subtle Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            TOP CTA
        ================================================= */}

        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-300">
                <Rocket className="h-3.5 w-3.5" />
                Keep Building
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Learn something.
                <br />

                <span className="text-violet-400">
                  Build something.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Practical learning for developers who want to
                understand how things actually work.
              </p>

            </div>


            {/* CTA */}

            <Link
              href="/all-courses"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
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
                hover:bg-violet-50
              "
            >
              Explore Courses
              <ArrowUpRight className="h-4 w-4" />
            </Link>

          </div>

        </div>


        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] lg:py-16">


          {/* ================= BRAND ================= */}

          <div className="max-w-sm">

            {/* Logo */}

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-extrabold shadow-lg shadow-violet-900/30">
                Q
              </div>

              <div>

                <p className="text-xl font-bold tracking-tight">
                  Quarlabs<span className="text-violet-400">.ai</span>
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-slate-500">
                  Learn • Build • Deploy
                </p>

              </div>

            </Link>


            <p className="mt-5 text-sm leading-6 text-slate-400">
              A practical learning platform for developers who
              want to go beyond tutorials and build real-world
              skills.
            </p>


            {/* App CTA */}

            <Link
              href="#"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                transition
                hover:border-violet-400/30
                hover:bg-violet-500/10
              "
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600">
                <Smartphone className="h-4 w-4" />
              </div>

              <div>

                <p className="text-[9px] uppercase tracking-wider text-slate-500">
                  Get the app
                </p>

                <p className="text-xs font-semibold text-white">
                  Learn on the go →
                </p>

              </div>

            </Link>

          </div>


          {/* ================= PRODUCT ================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-white">
              Platform
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/all-courses"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Courses
              </Link>

              <Link
                href="/all-courses"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Categories
              </Link>

              <Link
                href="/labs"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-400"
              >
                <FlaskConical className="h-3.5 w-3.5" />
                Deployment Labs
              </Link>

              <Link
                href="/blogs"
                className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-400"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Blogs
              </Link>

            </div>

          </div>


          {/* ================= LEARN ================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-white">
              Learn
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/courses/vps"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                VPS Deployment
              </Link>

              <Link
                href="/courses/aws"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                AWS
              </Link>

              <Link
                href="/courses/cicd"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                CI/CD
              </Link>

              <Link
                href="/courses/security"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Server Security
              </Link>

            </div>

          </div>


          {/* ================= COMPANY ================= */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/about"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block text-sm text-slate-400 transition hover:text-violet-400"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Quarlabs.ai. All rights reserved.
          </p>


          {/* Social */}

          <div className="flex items-center gap-2">

            <a
              href="#"
              aria-label="GitHub"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-slate-400
                transition
                hover:border-violet-400/30
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <Plane className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-slate-400
                transition
                hover:border-violet-400/30
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <Plane className="h-4 w-4" />
            </a>

            <a
              href="mailto:hello@quarlabs.ai"
              aria-label="Email"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                text-slate-400
                transition
                hover:border-violet-400/30
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <Mail className="h-4 w-4" />
            </a>

          </div>

        </div>


        {/* ================= BRAND TAG ================= */}

        <div className="border-t border-white/5 py-5 text-center">

          <p className="text-[10px] font-medium uppercase tracking-[2px] text-slate-600">
            Built for developers who build.
          </p>

        </div>

      </div>

    </footer>
  );
}