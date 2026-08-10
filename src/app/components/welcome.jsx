'use client'
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LearningFeatures from "../components/features";
import VideoCourseCTA from "../components/videoCourses";
import DeploymentLabs from "../components/labs";
import MobileAppCTA from "../components/mobileApp";
import BlogPreview from "../components/blogs";
import Footer from "../components/footer";
import ExploreCategories from "../components/catalog";

export default function WelcomeCard() {
    const router = useRouter()

    function route(){
        router.push("/auth")
    }
    return (
        <main className="h-screen">
        <section className="relative block lg:hidden w-full max-w-[390px] h-full max-h-[820px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.25)] flex flex-col bg-linear-to-b from-[#6C3EF4] to-[#5126D6]">

            {/* ===== Illustration zone ===== */}
            <div className="relative flex-[0_0_46%] min-h-0 overflow-hidden">
            {/* ambient glow */}
            <div className="absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            {/* dashed orbit rings */}
            <div className="absolute left-4 top-6 h-24 w-24 rounded-full border border-dashed border-white/15" />
            <div className="absolute right-2 bottom-24 h-16 w-16 rounded-full border border-dashed border-white/15" />

            {/* scattered dots */}
            <div className="absolute left-10 top-28 h-1.5 w-1.5 rounded-full bg-white/50" />
            <div className="absolute right-14 top-10 h-2 w-2 rounded-full bg-white/40" />
            <div className="absolute left-24 bottom-10 h-1.5 w-1.5 rounded-full bg-white/30" />

            {/* signature svg illustration */}
            <svg
                viewBox="0 0 320 300"
                className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2"
            >
                {/* dashed flight path from top-left */}
                <path
                d="M20 30 C 60 20, 90 60, 70 90"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2"
                strokeDasharray="5 6"
                strokeLinecap="round"
                />
                <path d="M62 82 L70 90 L58 96" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* bulb badge */}
                <g transform="translate(18,58)">
                <circle cx="18" cy="18" r="18" fill="#FFD54A" />
                <path d="M18 8c-5 0-9 4-9 9 0 3.5 2 5.5 3.5 7.5.8 1 1.2 1.7 1.2 2.8h8.6c0-1.1.4-1.8 1.2-2.8C25 22.5 27 20.5 27 17c0-5-4-9-9-9Z" fill="#7C3AED" />
                <rect x="14.5" y="27.5" width="7" height="3" rx="1" fill="#7C3AED" />
                </g>

                {/* search bar */}
                <g transform="translate(60,42)">
                <rect x="0" y="0" width="150" height="26" rx="13" fill="#FFFFFF" />
                <circle cx="130" cy="13" r="9" fill="#5126D6" />
                <circle cx="127" cy="10" r="4" fill="none" stroke="white" strokeWidth="2" />
                <line x1="130" y1="13" x2="133" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* plus badge */}
                <g transform="translate(230,70)">
                <rect x="0" y="0" width="30" height="30" rx="9" fill="#22C55E" transform="rotate(10 15 15)" />
                <line x1="15" y1="8" x2="15" y2="22" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <line x1="8" y1="15" x2="22" y2="15" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* small triangles / bars */}
                <path d="M240 40 l8 5 l-8 5 z" fill="rgba(255,255,255,0.5)" />
                <rect x="255" y="105" width="14" height="5" rx="2" fill="#5EEAD4" transform="rotate(-20 262 107)" />
                <rect x="30" y="105" width="10" height="10" rx="2" fill="#F472B6" transform="rotate(15 35 110)" />

                {/* laptop */}
                <g transform="translate(45,100)">
                <rect x="0" y="0" width="200" height="130" rx="14" fill="#E9E4FA" />
                <rect x="10" y="10" width="180" height="90" rx="6" fill="#7C3AED" />
                {/* terminal window */}
                <rect x="18" y="18" width="164" height="74" rx="5" fill="#1B1030" />
                <circle cx="26" cy="26" r="2.3" fill="#F87171" />
                <circle cx="34" cy="26" r="2.3" fill="#FBBF24" />
                <circle cx="42" cy="26" r="2.3" fill="#34D399" />
                <text x="24" y="42" fontFamily="monospace" fontSize="8" fill="#5EEAD4">$ deploy --prod</text>
                <text x="24" y="54" fontFamily="monospace" fontSize="8" fill="#A78BFA">✓ nginx reloaded</text>
                <text x="24" y="66" fontFamily="monospace" fontSize="8" fill="#A78BFA">✓ ufw rules synced</text>
                <rect x="24" y="74" width="30" height="7" rx="2" fill="#34D399" opacity="0.8" />
                <rect x="24" y="112" width="120" height="10" rx="5" fill="#C4B5FD" />
                {/* base */}
                <path d="M-10 130 L210 130 L195 145 L5 145 Z" fill="#5126D6" />
                </g>

                {/* book stack bottom-right */}
                <g transform="translate(190,205)">
                <rect x="0" y="14" width="80" height="14" rx="3" fill="#FBBF24" />
                <rect x="4" y="0" width="72" height="14" rx="3" fill="#FDE68A" />
                <rect x="2" y="7" width="76" height="4" fill="#F59E0B" opacity="0.6" />
                </g>

                {/* check badge */}
                <g transform="translate(258,150)">
                <rect x="0" y="0" width="34" height="34" rx="10" fill="#7C3AED" stroke="white" strokeWidth="2" transform="rotate(-8 17 17)" />
                <path d="M9 18 l5 5 l11 -12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-8 17 17)" />
                </g>
            </svg>
            </div>

            {/* ===== Bottom card ===== */}
            <div className="relative flex-1 min-h-0 rounded-t-[36px] bg-white px-8 pt-9 pb-7 flex flex-col overflow-hidden">
            <span className="mx-auto rounded-full bg-violet-100 px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-violet-600 uppercase">
                Querlabs
            </span>

            <h1 className="mt-4 text-center text-[26px] font-extrabold leading-tight text-slate-900">
                Master Your
                <br />
                VPS &amp; DevOps Skill
            </h1>

            <p className="mt-3 text-center text-sm leading-6 text-slate-500">
                Choose Your Favorite Track
                <br />
                And Start Deploying
            </p>

            <button onClick={route} className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-1.5 rounded-[18px] bg-linear-to-r from-[#7C3AED] to-[#5126D6] text-base font-bold text-white shadow-[0_15px_35px_rgba(108,62,244,.35)] transition-all duration-300 hover:scale-[1.02] active:scale-100 p-3 cursor-pointer" >
                Get Started
                <ChevronRight size={20} strokeWidth={3} />
            </button>

            
            </div>
        </section>

        {/* =====================================================
          DESKTOP / TABLET LANDING PAGE
      ===================================================== */}

      <section className="hidden md:block min-h-screen bg-[#f8fafc]">

        {/* ================= NAVBAR ================= */}

        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">

          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-8">

            {/* Logo */}

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-lg font-extrabold text-white shadow-lg shadow-violet-200">
                Q
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Quarlabs<span className="text-violet-600">.ai</span>
                </h1>

                <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-slate-400">
                  Learn • Build • Deploy
                </p>
              </div>

            </div>


            {/* Links */}

            <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-slate-500">

              <Link href={"/all-courses"} className="text-violet-600">
                Home
              </Link>

              <Link href={"/all-courses"} className="transition hover:text-violet-600">
                Courses
              </Link>

              <Link href={"/all-courses"} className="transition hover:text-violet-600">
                Categories
              </Link>

              <Link href={"/all-courses"} className="transition hover:text-violet-600">
                My Learning
              </Link>

            </div>


            {/* Profile */}

            <div className="flex items-center gap-3">

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 px-10 cursor-pointer">
                Login
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white px-10 cursor-pointer">
                SignUp
              </div>

            </div>

          </div>

        </nav>


        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-white">

          {/* Background */}

          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />

          <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-violet-200/30 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-100/40 blur-3xl" />


          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-8 py-12 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-semibold text-violet-600 shadow-sm">

                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                Developer Learning Platform

              </div>


              <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-2px] text-slate-900 xl:text-7xl">

                Learn skills.

                <br />

                <span className="text-violet-600">
                  Build things.
                </span>

                <br />

                Deploy everywhere.

              </h1>


              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">

                Master practical development skills through
                real-world courses covering VPS, AWS, Azure,
                CI/CD, security and modern engineering.

              </p>


              {/* Search */}

              <div className="mt-9 flex max-w-xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_15px_50px_rgba(15,23,42,0.08)]">

                <span className="px-4 text-xl text-slate-400">
                  ⌕
                </span>

                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-slate-400"
                />

                <button className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">
                  Explore
                </button>

              </div>


              {/* Stats */}

              <div className="mt-10 flex items-center gap-8">

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    20+
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Courses
                  </p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    10K+
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Learners
                  </p>
                </div>

                <div className="h-10 w-px bg-slate-200" />

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    100%
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Practical
                  </p>
                </div>

              </div>

            </div>


            {/* RIGHT VISUAL */}

            <div className="relative">

              {/* Main dashboard */}

              <div className="rounded-[32px] border border-white bg-white p-7 shadow-[0_35px_100px_rgba(76,29,149,0.16)]">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                      Learning Dashboard
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Your Developer Path
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-xl">
                    🚀
                  </div>

                </div>


                {/* Progress */}

                <div className="mt-8">

                  <div className="flex justify-between text-sm">

                    <span className="font-medium text-slate-500">
                      Overall progress
                    </span>

                    <span className="font-bold text-violet-600">
                      68%
                    </span>

                  </div>

                  <div className="mt-3 h-2.5 rounded-full bg-slate-100">

                    <div className="h-full w-[68%] rounded-full bg-violet-600" />

                  </div>

                </div>


                {/* Learning cards */}

                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      ☁️
                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-slate-800">
                        AWS Deployment
                      </p>

                      <p className="mt-1 text-xs text-emerald-500">
                        ✓ Completed
                      </p>

                    </div>

                  </div>


                  <div className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-violet-50/50 p-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
                      ⚙️
                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-slate-800">
                        CI/CD Pipelines
                      </p>

                      <p className="mt-1 text-xs text-violet-600">
                        Continue learning
                      </p>

                    </div>

                    <span className="text-xl text-violet-500">
                      →
                    </span>

                  </div>


                  <div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      🛡️
                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-slate-800">
                        Server Security
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Start course
                      </p>

                    </div>

                    <span className="text-slate-400">
                      →
                    </span>

                  </div>

                </div>

              </div>


              {/* Floating badge */}

              <div className="absolute -right-5 top-16 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Learning Streak
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  🔥 12 Days
                </p>

              </div>


              {/* Floating badge */}

              <div className="absolute -left-6 bottom-12 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Skill Level
                </p>

                <p className="mt-1 text-sm font-bold text-violet-600">
                  Advanced Developer
                </p>

              </div>

            </div>

          </div>

        </section>
        {/* ================= FEATURES ================= */}

        <LearningFeatures/>

        {/* ================= VIDEO COURSES ================= */}

        <VideoCourseCTA/>

        {/* ================= VIDEO COURSES ================= */}

        <DeploymentLabs/>


        {/* ================= CATEGORIES ================= */}

        <section className="mx-auto max-w-7xl px-8 py-20">

          {/* <div className="mb-10">

            <p className="text-xs font-bold uppercase tracking-[1.5px] text-violet-600">
              Explore
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              Explore Categories
            </h2>

            <p className="mt-2 text-base text-slate-400">
              Choose a technology and start building real-world skills.
            </p>

          </div> */}

          <ExploreCategories />

        </section>


        {/* ================= BOTTOM CTA ================= */}

        <section className="mx-auto max-w-7xl px-8 pb-24">

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-700 to-purple-600 px-10 py-16 lg:px-16">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-wider text-violet-200">
                Start Learning
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-white">
                Turn knowledge into
                <br />
                real-world skills.
              </h2>

              <p className="mt-5 mb-8 text-base leading-7 text-white/70">
                Learn practical development workflows,
                deployment strategies and production-ready
                engineering skills.
              </p>

              <Link href="all-courses" className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-violet-700 shadow-xl hover:bg-violet-50">
                Explore Courses →
              </Link>

            </div>

          </div>

        </section>

        <BlogPreview/>

        <MobileAppCTA/>

        <Footer/>

      </section>
        </main>
    );
}