"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-violet-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-fuchsia-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 md:px-8 lg:px-10 lg:pb-20 lg:pt-20">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                <MessageCircle className="h-3.5 w-3.5" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-violet-600 sm:text-xs">
                Get in Touch
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              We'd love to
              <span className="text-violet-600"> hear from you.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 md:text-lg">
              Have a question, found an issue, or simply want to talk?
              Send us a message and our team will get back to you.
            </p>

          </div>

        </div>
      </section>


      {/* ================= MAIN ================= */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16">

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">

          {/* ================= CONTACT INFO ================= */}

          <div className="flex flex-col rounded-2xl bg-slate-950 p-6 text-white sm:rounded-3xl sm:p-8 lg:p-10">

            <div>

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-900/30">
                <Mail className="h-5 w-5" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Let's talk.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Whether you have a question about our courses, need
                technical help, or want to work with us, we're here.
              </p>

            </div>


            {/* EMAIL */}

            <a
              href="mailto:support@querlabs.com"
              className="group mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-500/30 hover:bg-white/10"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-400">
                <Mail className="h-4 w-4" />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-semibold text-white transition group-hover:text-violet-300">
                  support@querlabs.com
                </p>
              </div>
            </a>


            {/* LOCATION */}

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-400">
                <MapPin className="h-4 w-4" />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  India
                </p>
              </div>
            </div>


            {/* RESPONSE */}

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-violet-400">
                <Clock3 className="h-4 w-4" />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Response Time
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Usually within 24–48 hours
                </p>
              </div>
            </div>


            {/* BOTTOM */}

            <div className="mt-auto hidden border-t border-white/10 pt-8 sm:block lg:mt-12">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>

                <span className="text-xs text-slate-400">
                  Your message matters to us.
                </span>
              </div>
            </div>

          </div>


          {/* ================= FORM ================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_5px_25px_rgba(15,23,42,0.05)] sm:rounded-3xl sm:p-7 md:p-8 lg:p-10">

            <div className="mb-7">

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-500" />

                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600">
                  Contact Form
                </span>
              </div>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Send us a message
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
                Fill in the details below and we'll get back to you.
              </p>

            </div>


            <form className="space-y-5">

              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[11px] font-bold text-slate-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-[11px] font-bold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
                  />
                </div>

              </div>


              {/* SUBJECT */}

              <div>
                <label className="mb-2 block text-[11px] font-bold text-slate-700">
                  Subject
                </label>

                <select className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-50">

                  <option value="">
                    Select a topic
                  </option>

                  <option>Course Support</option>
                  <option>Technical Issue</option>
                  <option>Billing & Payments</option>
                  <option>Partnership</option>
                  <option>General Question</option>

                </select>
              </div>


              {/* MESSAGE */}

              <div>
                <label className="mb-2 block text-[11px] font-bold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="min-h-[140px] w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
                />
              </div>


              {/* CHECKBOX */}

              <label className="flex cursor-pointer items-start gap-2">

                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-violet-600"
                />

                <span className="text-[10px] leading-4 text-slate-400 sm:text-xs">
                  I agree to be contacted regarding my enquiry.
                </span>

              </label>


              {/* BUTTON */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-700 hover:shadow-violet-300 active:scale-[0.99]"
              >
                Send Message

                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>

            </form>

          </div>

        </div>


        {/* ================= QUICK HELP ================= */}

        <section className="mt-12 sm:mt-16">

          <div className="mb-5 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600">
              Need Help?
            </p>

            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Maybe we already have the answer.
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* COURSES */}

            <Link
              href="/all-courses"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-violet-100 hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BookOpen className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Explore Courses
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Browse our practical courses.
                </p>
              </div>

              <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500" />

            </Link>


            {/* BLOG */}

            <Link
              href="/blogs"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-violet-100 hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                <BookOpen className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Read Our Blog
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Find guides and tutorials.
                </p>
              </div>

              <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500" />

            </Link>


            {/* EMAIL */}

            <a
              href="mailto:support@querlabs.com"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-violet-100 hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Mail className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Email Support
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Contact our support team.
                </p>
              </div>

              <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500" />

            </a>

          </div>

        </section>


        {/* ================= BOTTOM CTA ================= */}

        <section className="relative mt-12 overflow-hidden rounded-2xl bg-violet-600 px-5 py-8 text-center sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-10">

          <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />

          <div className="relative">

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Have something to build?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-violet-100 sm:text-sm">
              We're always excited to hear from developers, learners and
              teams building something meaningful.
            </p>

            <a
              href="mailto:support@querlabs.com"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-violet-700 shadow-lg transition hover:bg-violet-50 sm:text-sm"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </a>

          </div>

        </section>

      </section>

    </main>
  );
}