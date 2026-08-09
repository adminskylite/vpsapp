// import BottomNav from "../components/bottomNav"
// import ExploreCategories from "../components/catalog"
// export default function Main(){
//     return(
//         <div className="h-[100vh]">
//             <div className="relative h-[25vh] overflow-hidden  bg-gradient-to-br from-[#7C3AED] via-[#6C3EF4] to-[#5A2DE3] px-6 pt-8">

//                 {/* Background Glow */}
//                 <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
//                 <div className="absolute left-44 top-6 h-32 w-32 rounded-full border border-white/10" />
//                 <div className="absolute right-8 bottom-2 h-20 w-20 rounded-full border border-white/10" />

//                 {/* Floating Dots */}
//                 <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-white/40" />
//                 <div className="absolute right-20 top-14 h-3 w-3 rounded-full bg-white/30" />
//                 <div className="absolute bottom-10 left-24 h-2 w-2 rounded-full bg-white/20" />

//                 {/* Notification */}
//                 <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
//                     🔔
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">

//                     <p className="text-lg font-medium text-white/80">
//                     Hello 👋
//                     </p>

//                     <h1 className="mt-2 text-[40px] font-extrabold leading-none text-white">
//                     Welcome to
//                     </h1>

//                     <h2 className="mt-1 text-[22px] font-semibold tracking-wide text-white/90">
//                     Quarlabs.ai
//                     </h2>

//                 </div>

//                 </div>
//             <div className="h-[61vh] bg-white">
//                 <ExploreCategories/>
//             </div>
//             <div className="h-[10vh] bg-white"><BottomNav/></div>
//         </div>
//     )
// }


import BottomNav from "../components/bottomNav";
import ExploreCategories from "../components/catalog";
import Link from "next/link";
export default function Main() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          MOBILE APP
      ===================================================== */}

      <section className="md:hidden h-[100vh] overflow-hidden bg-white">

        <div className="h-full flex flex-col">

          {/* MOBILE HERO */}

          <div className="relative h-[38vh] min-h-[270px] shrink-0 overflow-hidden rounded-b-[32px] bg-gradient-to-br from-violet-700 via-violet-600 to-purple-500 px-6 pt-8">

            {/* Glow */}
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute left-40 top-8 h-28 w-28 rounded-full border border-white/10" />

            <div className="absolute right-8 bottom-4 h-20 w-20 rounded-full border border-white/10" />

            {/* Dots */}
            <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-white/40" />

            <div className="absolute right-20 top-16 h-3 w-3 rounded-full bg-white/30" />

            {/* Notification */}
            <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
              🔔
            </button>

            {/* Content */}
            <div className="relative z-10 pt-12">

              <p className="text-lg font-medium text-white/75">
                Hello 👋
              </p>

              <h1 className="mt-2 text-[40px] font-extrabold leading-none text-white">
                Welcome to
              </h1>

              <h2 className="mt-1 text-[22px] font-semibold tracking-wide text-white/90">
                Quarlabs.ai
              </h2>

            </div>

          </div>


          {/* MOBILE CATEGORY AREA */}

          <div className="min-h-0 flex-1 overflow-scroll overflow-x-hidden bg-white">

            <ExploreCategories />

          </div>


          {/* MOBILE NAV */}

          <div className="h-[10vh] min-h-[64px] shrink-0 bg-white">

            <BottomNav />

          </div>

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

              <a className="text-violet-600">
                Home
              </a>

              <a className="transition hover:text-violet-600">
                Courses
              </a>

              <a className="transition hover:text-violet-600">
                Categories
              </a>

              <a className="transition hover:text-violet-600">
                My Learning
              </a>

            </div>


            {/* Profile */}

            <div className="flex items-center gap-3">

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
                🔔
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
                N
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


          <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-8 py-24 lg:grid-cols-2">

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

      </section>

    </main>
  );
}