// "use client";

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
// ];

// export default function ExploreCategories() {

//     const statusStyles = {
//         live: "bg-emerald-500 text-white",
//         upcoming: "bg-amber-500 text-white",
//     };

//     return (
//         <div className="w-full max-w-sm mx-auto p-4">
//         <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-bold text-slate-900">Explore Categories</h2>
//             <Link href={"/all-courses"} className="cursor-pointer text-sm font-semibold text-violet-600 flex items-center gap-0.5 hover:text-violet-700 transition-colors">
//             View All
//             <span className="text-base leading-none">›</span>
//             </Link>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//             {categories.map(({ title, count, icon: Icon, bg, iconColor, status }) => (
                
//                 <Link
//                     href={"/modules"}
//                     key={title}
//                     className="relative group bg-white rounded-2xl p-4 flex flex-col items-start gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-shadow text-left cursor-pointer"
//                 >
//                     <span
//                     className={`absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${statusStyles[status]}`}
//                     >
//                     {status}
//                     </span>
//                     <div
//                     className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} group-hover:scale-105 transition-transform`}
//                     >
//                     <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={2} />
//                     </div>
//                     <div>
//                     <p className="font-semibold text-slate-900 text-[15px] leading-tight">
//                         {title}
//                     </p>
//                     <p className="text-slate-400 text-sm mt-0.5">{count}</p>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//         </div>
//     );
// }

"use client";

import {
  PieChart,
  CheckCircle2,
  PenTool,
  Plane,
  CircleCheckBig,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "VPS Deployment",
    count: "1 Course",
    icon: PieChart,
    bg: "bg-gradient-to-br from-orange-100 to-rose-100",
    iconColor: "text-rose-500",
    status: "live",
  },
  {
    title: "AWS",
    count: "1 Course",
    icon: CircleCheckBig,
    bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
    iconColor: "text-emerald-500",
    status: "upcoming",
  },
  {
    title: "Azure",
    count: "1 Course",
    icon: PenTool,
    bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
    iconColor: "text-purple-600",
    status: "upcoming",
  },
  {
    title: "CI/CD Pipelines",
    count: "1 Course",
    icon: Plane,
    bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
    iconColor: "text-indigo-500",
    status: "upcoming",
  },
];

export default function ExploreCategories() {
  const statusStyles = {
    live: "bg-emerald-500 text-white",
    upcoming: "bg-amber-500 text-white",
  };

  return (
    <section className="w-full px-4 py-5 sm:px-6 md:px-8 lg:px-0">

      {/* Header */}
      <div className="mx-auto mb-5 flex w-full max-w-7xl items-center justify-between">

        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600 sm:text-xs">
            Learn & Explore
          </p>

          <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl md:text-2xl">
            Explore Categories
          </h2>
        </div>

        <Link
          href="/all-courses"
          className="
            flex
            items-center
            gap-0.5
            rounded-lg
            px-2
            py-1
            text-xs
            font-semibold
            text-violet-600
            transition-colors
            hover:bg-violet-50
            hover:text-violet-700
            sm:text-sm
          "
        >
          View All
          <span className="text-base leading-none">
            ›
          </span>
        </Link>

      </div>


      {/* Categories */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-2
          gap-3
          sm:gap-4
          md:grid-cols-2
          lg:grid-cols-4
          lg:gap-5
          xl:gap-6
        "
      >

        {categories.map(
          ({ title, count, icon: Icon, bg, iconColor, status }) => (
            <Link
              href="/modules"
              key={title}
              className="
                group
                relative
                flex
                min-h-[170px]
                flex-col
                items-start
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-3.5
                shadow-[0_2px_10px_rgba(15,23,42,0.05)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-violet-100
                hover:shadow-[0_10px_30px_rgba(15,23,42,0.09)]
                sm:min-h-[185px]
                sm:p-5
                md:min-h-[200px]
                lg:min-h-[220px]
                lg:p-6
              "
            >

              {/* Status */}
              <span
                className={`
                  absolute
                  right-2.5
                  top-2.5
                  rounded-full
                  px-2
                  py-0.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wide
                  sm:right-3
                  sm:top-3
                  sm:text-[10px]
                  ${statusStyles[status]}
                `}
              >
                {status}
              </span>


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
                  sm:h-14
                  sm:w-14
                  sm:rounded-[18px]
                  lg:h-16
                  lg:w-16
                  ${bg}
                `}
              >
                <Icon
                  className={`
                    h-6
                    w-6
                    sm:h-7
                    sm:w-7
                    lg:h-8
                    lg:w-8
                    ${iconColor}
                  `}
                  strokeWidth={2}
                />
              </div>


              {/* Content */}
              <div className="mt-4 w-full">

                <p
                  className="
                    max-w-[90%]
                    text-[14px]
                    font-semibold
                    leading-tight
                    text-slate-900
                    sm:text-[15px]
                    lg:text-base
                  "
                >
                  {title}
                </p>

                <div className="mt-1.5 flex items-center justify-between">

                  <p className="text-xs text-slate-400 sm:text-sm">
                    {count}
                  </p>

                  <span
                    className="
                      translate-x-1
                      text-sm
                      text-slate-300
                      opacity-0
                      transition-all
                      group-hover:translate-x-0
                      group-hover:text-violet-500
                      group-hover:opacity-100
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
  );
}