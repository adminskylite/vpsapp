// 'use client'
// import { PieChart, CheckCircle2, PenTool, Plane, CircleCheckBig } from "lucide-react";
// import Link from "next/link";
// const categories = [
//   {
//     title: "VPS Deployment",
//     count: "1 Courses",
//     icon: PieChart,
//     bg: "bg-gradient-to-br from-orange-100 to-rose-100",
//     iconColor: "text-rose-500",
//     status: "live"
//   },
//   {
//     title: "AWS",
//     count: "1 Courses",
//     icon: CircleCheckBig,
//     bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
//     iconColor: "text-emerald-500",
//     status: "upcoming"
//   },
//   {
//     title: "Azure",
//     count: "1 Courses",
//     icon: PenTool,
//     bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
//     iconColor: "text-purple-600",
//     status: "upcoming"

//   },
//   {
//     title: "CICD pilelines",
//     count: "1 Courses",
//     icon: Plane,
//     bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
//     iconColor: "text-indigo-500",
//     status: "upcoming"

//   },
//   {
//     title: "Github bootcamp",
//     count: "1 Courses",
//     icon: PieChart,
//     bg: "bg-gradient-to-br from-orange-100 to-rose-100",
//     iconColor: "text-rose-500",
//     status: "live"
//   },
//   {
//     title: "Secuity bootcamp",
//     count: "1 Courses",
//     icon: CircleCheckBig,
//     bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
//     iconColor: "text-emerald-500",
//     status: "live"
//   },
//   {
//     title: "Server scaling",
//     count: "1 Courses",
//     icon: PenTool,
//     bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
//     iconColor: "text-purple-600",
//     status: "live"

//   },
//   {
//     title: "Deployment strategies",
//     count: "1 Courses",
//     icon: Plane,
//     bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
//     iconColor: "text-indigo-500",
//     status: "live"

//   },
// ];
// export default function AllCourses(){
//     const statusStyles = {
//         live: "bg-emerald-500 text-white",
//         upcoming: "bg-amber-500 text-white",
//     };
//     return(
//         <div className="w-full max-w-sm mx-auto p-4 bg-white h-[100vh] overflow-scroll overflow-x-hidden">
//             <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-lg font-bold text-slate-900">Explore Categories</h2>
//                 {/* <button className="cursor-pointer text-sm font-semibold text-violet-600 flex items-center gap-0.5 hover:text-violet-700 transition-colors">
//                 View All
//                 <span className="text-base leading-none">›</span>
//                 </button> */}
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//                 {categories.map(({ title, count, icon: Icon, bg, iconColor, status }) => (
                    
//                     <Link
//                         href={"/modules"}
//                         key={title}
//                         className="relative group bg-white rounded-2xl p-4 flex flex-col items-start gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-shadow text-left cursor-pointer"
//                     >
//                         <span
//                         className={`absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${statusStyles[status]}`}
//                         >
//                         {status}
//                         </span>
//                         <div
//                         className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} group-hover:scale-105 transition-transform`}
//                         >
//                         <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={2} />
//                         </div>
//                         <div>
//                         <p className="font-semibold text-slate-900 text-[15px] leading-tight">
//                             {title}
//                         </p>
//                         <p className="text-slate-400 text-sm mt-0.5">{count}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }



























// "use client";

// import {
//   PieChart,
//   PenTool,
//   Plane,
//   CircleCheckBig,
//   ShieldCheck,
//   Scaling,
//   Rocket,
// } from "lucide-react";
// import Link from "next/link";

// const categories = [
//   {
//     title: "VPS Deployment",
//     count: "1 Course",
//     icon: PieChart,
//     bg: "bg-gradient-to-br from-orange-100 to-rose-100",
//     iconColor: "text-rose-500",
//     status: "live",
//   },
//   {
//     title: "AWS",
//     count: "1 Course",
//     icon: CircleCheckBig,
//     bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
//     iconColor: "text-emerald-500",
//     status: "upcoming",
//   },
//   {
//     title: "Azure",
//     count: "1 Course",
//     icon: PenTool,
//     bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
//     iconColor: "text-purple-600",
//     status: "upcoming",
//   },
//   {
//     title: "CI/CD Pipelines",
//     count: "1 Course",
//     icon: Plane,
//     bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
//     iconColor: "text-indigo-500",
//     status: "upcoming",
//   },
//   {
//     title: "GitHub Bootcamp",
//     count: "1 Course",
//     icon: Plane,
//     bg: "bg-gradient-to-br from-slate-100 to-gray-200",
//     iconColor: "text-slate-700",
//     status: "live",
//   },
//   {
//     title: "Security Bootcamp",
//     count: "1 Course",
//     icon: ShieldCheck,
//     bg: "bg-gradient-to-br from-emerald-100 to-teal-100",
//     iconColor: "text-emerald-600",
//     status: "live",
//   },
//   {
//     title: "Server Scaling",
//     count: "1 Course",
//     icon: Scaling,
//     bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
//     iconColor: "text-purple-600",
//     status: "live",
//   },
//   {
//     title: "Deployment Strategies",
//     count: "1 Course",
//     icon: Rocket,
//     bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
//     iconColor: "text-indigo-500",
//     status: "live",
//   },
// ];

// export default function AllCourses() {
//   const statusStyles = {
//     live: "bg-emerald-500 text-white",
//     upcoming: "bg-amber-500 text-white",
//   };

//   return (
//     <main className="min-h-screen bg-[#f8fafc]">

//       <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-12">

//         {/* ================= HEADER ================= */}

//         <div className="mb-7 sm:mb-9 md:mb-10">

//           <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600 sm:text-xs">
//             Learn & Grow
//           </p>

//           <div className="flex items-end justify-between gap-4">

//             <div>
//               <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
//                 Explore Categories
//               </h1>

//               <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 md:text-base">
//                 Explore practical courses and build real-world
//                 development skills.
//               </p>
//             </div>

//             <div className="hidden shrink-0 rounded-full bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-600 sm:block">
//               {categories.length} Categories
//             </div>

//           </div>

//         </div>


//         {/* ================= COURSE GRID ================= */}

//         <div
//           className="
//             grid
//             grid-cols-2
//             gap-3
//             sm:gap-4
//             md:grid-cols-3
//             md:gap-5
//             lg:grid-cols-4
//             lg:gap-6
//           "
//         >

//           {categories.map(
//             ({ title, count, icon: Icon, bg, iconColor, status }) => (
//               <Link
//                 href="/modules"
//                 key={title}
//                 className="
//                   group
//                   relative
//                   flex
//                   min-h-[175px]
//                   flex-col
//                   items-start
//                   justify-between
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-slate-100
//                   bg-white
//                   p-3.5
//                   text-left
//                   shadow-[0_2px_12px_rgba(15,23,42,0.05)]
//                   transition-all
//                   duration-200
//                   hover:-translate-y-1
//                   hover:border-violet-100
//                   hover:shadow-[0_12px_30px_rgba(15,23,42,0.09)]
//                   sm:min-h-[190px]
//                   sm:p-5
//                   md:min-h-[205px]
//                   lg:min-h-[220px]
//                   lg:p-6
//                 "
//               >

//                 {/* ================= STATUS ================= */}

//                 <span
//                   className={`
//                     absolute
//                     right-2.5
//                     top-2.5
//                     rounded-full
//                     px-2
//                     py-0.5
//                     text-[9px]
//                     font-bold
//                     uppercase
//                     tracking-wide
//                     sm:right-3
//                     sm:top-3
//                     sm:px-2.5
//                     sm:py-1
//                     sm:text-[10px]
//                     ${statusStyles[status]}
//                   `}
//                 >
//                   {status}
//                 </span>


//                 {/* ================= ICON ================= */}

//                 <div
//                   className={`
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     transition-transform
//                     duration-200
//                     group-hover:scale-105
//                     sm:h-14
//                     sm:w-14
//                     md:h-15
//                     md:w-15
//                     lg:h-16
//                     lg:w-16
//                     ${bg}
//                   `}
//                 >
//                   <Icon
//                     className={`
//                       h-6
//                       w-6
//                       sm:h-7
//                       sm:w-7
//                       lg:h-8
//                       lg:w-8
//                       ${iconColor}
//                     `}
//                     strokeWidth={2}
//                   />
//                 </div>


//                 {/* ================= CONTENT ================= */}

//                 <div className="mt-4 w-full">

//                   <div className="flex items-end justify-between gap-2">

//                     <div className="min-w-0">

//                       <p
//                         className="
//                           truncate
//                           text-[14px]
//                           font-semibold
//                           leading-tight
//                           text-slate-900
//                           sm:text-[15px]
//                           md:text-base
//                         "
//                       >
//                         {title}
//                       </p>

//                       <p className="mt-1 text-xs text-slate-400 sm:text-sm">
//                         {count}
//                       </p>

//                     </div>

//                     {/* Arrow */}
//                     <span
//                       className="
//                         hidden
//                         shrink-0
//                         text-lg
//                         text-slate-300
//                         transition-all
//                         group-hover:translate-x-1
//                         group-hover:text-violet-500
//                         sm:block
//                       "
//                     >
//                       →
//                     </span>

//                   </div>

//                 </div>

//               </Link>
//             )
//           )}

//         </div>

//       </div>

//     </main>
//   );
// }








"use client";

import {
  PieChart,
  PenTool,
  Plane,
  CircleCheckBig,
  ShieldCheck,
  Scaling,
  Rocket,
  BookOpen,
  Play,
  Clock3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const liveCourses = [
  {
    title: "VPS Deployment Masterclass",
    description:
      "Master real-world VPS deployment from server setup to Nginx, SSL, PM2, security and production-ready deployments.",
    count: "12+ Lessons",
    duration: "3h 45m",
    badge: "Premium Course",
    icon: PieChart,
    bg: "bg-gradient-to-br from-orange-100 via-rose-100 to-pink-100",
    iconColor: "text-rose-500",
    href: "YOUR_UDEMY_COURSE_URL",
  },
];
const upcomingCourses = [
  {
    title: "AWS Deployment",
    count: "Coming Soon",
    icon: CircleCheckBig,
    bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
    iconColor: "text-emerald-500",
  },
  {
    title: "Azure Deployment",
    count: "Coming Soon",
    icon: PenTool,
    bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "CI/CD Pipelines",
    count: "Coming Soon",
    icon: Plane,
    bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
    iconColor: "text-indigo-500",
  },
];

const readingCourses = [
  {
    title: "GitHub Bootcamp",
    count: "Reading Course",
    icon: Plane,
    bg: "bg-gradient-to-br from-slate-100 to-gray-200",
    iconColor: "text-slate-700",
  },
  {
    title: "Security Bootcamp",
    count: "Reading Course",
    icon: ShieldCheck,
    bg: "bg-gradient-to-br from-emerald-100 to-teal-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Server Scaling",
    count: "Reading Course",
    icon: Scaling,
    bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Deployment Strategies",
    count: "Reading Course",
    icon: Rocket,
    bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
    iconColor: "text-indigo-500",
  },
];

export default function AllCourses() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-12">

        {/* ================= HEADER ================= */}

        <div className="mb-8 sm:mb-10 md:mb-12">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600 sm:text-xs">
            Learn & Grow
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Explore Courses
              </h1>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 md:text-base">
                Learn practical development, deployment and DevOps skills
                through video and reading-based courses.
              </p>
            </div>

            <div className="hidden shrink-0 rounded-full bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-600 sm:block">
              8 Courses
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LIVE VIDEO COURSES */}
        {/* ========================================================= */}

        <section className="mb-10 sm:mb-12 md:mb-14">

  {/* Section Heading */}
  <div className="mb-4 flex items-center justify-between sm:mb-5">
    <div>
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <Play className="h-3.5 w-3.5 fill-current" />
        </span>

        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
          Premium Video Courses
        </h2>
      </div>

      <p className="mt-1 text-xs text-slate-400 sm:text-sm">
        Learn from our in-depth courses available on Udemy.
      </p>
    </div>

    <span className="hidden rounded-full bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-orange-600 sm:block">
      Paid Course
    </span>
  </div>

  {liveCourses.map(
    ({
      title,
      description,
      count,
      duration,
      badge,
      icon: Icon,
      bg,
      iconColor,
      href,
    }) => (
      <a
        key={title}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          block
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-[0_4px_20px_rgba(15,23,42,0.06)]
          transition-all
          duration-200
          active:scale-[0.99]
          sm:rounded-3xl
          sm:hover:-translate-y-1
          sm:hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
        "
      >

        {/* Premium Badge */}
        <div className="
          absolute
          right-3
          top-3
          z-10
          flex
          items-center
          gap-1.5
          rounded-full
          bg-slate-900
          px-2.5
          py-1
          text-[9px]
          font-bold
          uppercase
          tracking-wide
          text-white
          shadow-sm
          sm:right-5
          sm:top-5
          sm:px-3
          sm:py-1.5
          sm:text-[10px]
        ">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          {badge}
        </div>

        <div className="flex flex-col sm:flex-row">

          {/* Course Visual */}
          <div
            className={`
              relative
              flex
              min-h-[175px]
              w-full
              items-center
              justify-center
              overflow-hidden
              ${bg}
              sm:min-h-[240px]
              sm:w-[34%]
            `}
          >

            {/* Decorative circles */}
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-white/30 blur-2xl" />

            <div className="
              relative
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-white/80
              shadow-md
              backdrop-blur-sm
              sm:h-24
              sm:w-24
            ">
              <Icon
                className={`h-10 w-10 sm:h-12 sm:w-12 ${iconColor}`}
                strokeWidth={1.8}
              />
            </div>

          </div>

          {/* Content */}
          <div className="
            flex
            flex-1
            flex-col
            justify-between
            p-5
            sm:p-7
            md:p-8
          ">

            <div>

              {/* Udemy Branding */}
              <div className="mb-3 flex flex-wrap items-center gap-2">

                <span className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-orange-50
                  px-2
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-orange-600
                ">
                  <Play className="h-3 w-3 fill-current" />
                  Udemy Course
                </span>

                <span className="
                  rounded-md
                  bg-slate-100
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                ">
                  Paid
                </span>

              </div>

              <h3 className="
                max-w-2xl
                text-xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-2xl
                md:text-3xl
              ">
                {title}
              </h3>

              <p className="
                mt-2
                max-w-2xl
                text-xs
                leading-5
                text-slate-400
                sm:text-sm
                sm:leading-6
              ">
                {description}
              </p>

            </div>

            {/* Bottom Meta */}
            <div className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-3
              sm:mt-7
            ">

              <div className="
                flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-slate-500
              ">
                <Play className="h-3.5 w-3.5 text-orange-500" />
                {count}
              </div>

              <div className="h-3 w-px bg-slate-200" />

              <div className="
                flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-slate-500
              ">
                <Clock3 className="h-3.5 w-3.5 text-orange-500" />
                {duration}
              </div>

              {/* CTA */}
              <div className="
                ml-auto
                flex
                items-center
                gap-1.5
                rounded-lg
                bg-slate-900
                px-3
                py-2
                text-[10px]
                font-bold
                text-white
                transition-all
                group-hover:bg-orange-500
                sm:px-4
                sm:py-2.5
                sm:text-xs
              ">
                View on Udemy
                <ArrowRight className="
                  h-3.5
                  w-3.5
                  transition-transform
                  group-hover:translate-x-1
                " />
              </div>

            </div>

          </div>

        </div>

      </a>
    )
  )}

</section>
        {/* ========================================================= */}
        {/* UPCOMING COURSES */}
        {/* ========================================================= */}

        <section className="mb-10 sm:mb-12 md:mb-14">

          <div className="mb-4 sm:mb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                <Clock3 className="h-3.5 w-3.5" />
              </span>

              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Upcoming Courses
              </h2>
            </div>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              More practical courses are coming soon.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5">

            {upcomingCourses.map(
              ({ title, count, icon: Icon, bg, iconColor }) => (
                <div
                  key={title}
                  className="
                    relative
                    flex
                    min-h-[165px]
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-3.5
                    shadow-[0_2px_12px_rgba(15,23,42,0.04)]
                    sm:min-h-[190px]
                    sm:p-5
                    md:min-h-[205px]
                  "
                >
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-amber-500 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[9px]">
                    Soon
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${bg}`}
                  >
                    <Icon
                      className={`h-6 w-6 sm:h-7 sm:w-7 ${iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="mt-4">
                    <p className="truncate text-sm font-semibold text-slate-900 sm:text-[15px] md:text-base">
                      {title}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
                      {count}
                    </p>
                  </div>
                </div>
              )
            )}

          </div>
        </section>

        {/* ========================================================= */}
        {/* READING COURSES */}
        {/* ========================================================= */}

        <section>

          <div className="mb-4 sm:mb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <BookOpen className="h-3.5 w-3.5" />
              </span>

              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Reading Courses
              </h2>
            </div>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Learn at your own pace with structured reading material.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">

            {readingCourses.map(
              ({ title, count, icon: Icon, bg, iconColor }) => (
                <Link
                  href="/modules"
                  key={title}
                  className="
                    group
                    relative
                    flex
                    min-h-[175px]
                    flex-col
                    items-start
                    justify-between
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-3.5
                    text-left
                    shadow-[0_2px_12px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-200
                    active:scale-[0.98]
                    sm:min-h-[190px]
                    sm:p-5
                    sm:hover:-translate-y-1
                    sm:hover:border-violet-100
                    sm:hover:shadow-[0_12px_30px_rgba(15,23,42,0.09)]
                    md:min-h-[205px]
                    lg:min-h-[220px]
                    lg:p-6
                  "
                >

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
                      sm:h-14
                      sm:w-14
                      lg:h-16
                      lg:w-16
                      ${bg}
                    `}
                  >
                    <Icon
                      className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="mt-4 w-full">

                    <div className="flex items-end justify-between gap-2">

                      <div className="min-w-0">

                        <p className="truncate text-[14px] font-semibold leading-tight text-slate-900 sm:text-[15px] md:text-base">
                          {title}
                        </p>

                        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                          {count}
                        </p>

                      </div>

                      <span
                        className="
                          hidden
                          shrink-0
                          text-lg
                          text-slate-300
                          transition-all
                          group-hover:translate-x-1
                          group-hover:text-violet-500
                          sm:block
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                </Link>
              )
            )}

          </div>

        </section>

      </div>
    </main>
  );
}