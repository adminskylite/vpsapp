// "use client";

// import { useState } from "react";
// import BottomNav from "./bottomNav";
// import Link from "next/link";
// export default function CourseModules({
//   courseName,
//   modules = [],
//   onReadContent,
// }) {
//   const [openModule, setOpenModule] = useState(null);

//   const toggleModule = (moduleId) => {
//     setOpenModule((prev) => (prev === moduleId ? null : moduleId));
//   };

//   return (
//     <div className="w-full  mx-auto h-[100vh] bg-white p-4 overflow-scroll overflow-x-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <p className="text-[11px] font-bold tracking-[1.5px] text-violet-600 uppercase mb-1">
//             Course Modules
//           </p>

//           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
//             {courseName}
//           </h2>

//           <p className="text-sm text-slate-400 mt-1">
//             {modules.length} {modules.length === 1 ? "module" : "modules"} available
//           </p>
//         </div>

//         {/* Module count */}
//         <div className="w-11 h-11 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 font-bold text-sm">
//           {modules.length}
//         </div>
//       </div>

//       {/* Module List */}
//       <div className="space-y-3">
//         {modules.map((module, index) => {
//           const isOpen = openModule === module.id;

//           return (
//             <div
//               key={module.id}
//               className={`rounded-2xl transition-all duration-200 ${
//                 isOpen
//                   ? "shadow-[0_8px_30px_rgba(124,58,237,0.10)]"
//                   : ""
//               }`}
//             >
//               {/* Module Tile */}
//               <button
//                 type="button"
//                 onClick={() => toggleModule(module.id)}
//                 className={`
//                   w-full flex items-center gap-4 p-4
//                   bg-white
//                   border
//                   text-left
//                   transition-all duration-200
//                   ${
//                     isOpen
//                       ? "border-violet-300 rounded-t-2xl"
//                       : "border-slate-100 rounded-2xl hover:border-violet-200 hover:-translate-y-[1px] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
//                   }
//                 `}
//               >
//                 {/* Number */}
//                 <div
//                   className={`
//                     shrink-0
//                     w-12 h-12
//                     rounded-xl
//                     flex items-center justify-center
//                     text-sm font-extrabold
//                     transition-all duration-200
//                     ${
//                       isOpen
//                         ? "bg-violet-600 text-white"
//                         : "bg-violet-50 text-violet-600"
//                     }
//                   `}
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-[16px] font-semibold text-slate-900">
//                     {module.title}
//                   </h3>

//                   {module.description && (
//                     <p className="text-xs sm:text-sm text-slate-400 mt-1 truncate">
//                       {module.description}
//                     </p>
//                   )}

//                   {module.duration && (
//                     <span className="inline-block text-[11px] text-slate-400 mt-1.5">
//                       ◷ {module.duration}
//                     </span>
//                   )}
//                 </div>

//                 {/* Arrow */}
//                 <div
//                   className={`
//                     shrink-0
//                     w-9 h-9
//                     rounded-full
//                     flex items-center justify-center
//                     text-xl
//                     transition-all duration-200
//                     ${
//                       isOpen
//                         ? "bg-violet-50 text-violet-600 rotate-90"
//                         : "bg-slate-50 text-slate-500"
//                     }
//                   `}
//                 >
//                   ›
//                 </div>
//               </button>

//               {/* Dropdown */}
//               {isOpen && (
//                 <div className="border-x border-b border-violet-300 rounded-b-2xl bg-white p-2">
//                   <div className="bg-slate-50 rounded-xl p-2 space-y-1">

//                     {/* Read Content */}
//                     <Link
//                       type="button"
//                       href="/content"
//                       className="
//                         w-full
//                         flex items-center gap-3
//                         p-3
//                         rounded-xl
//                         bg-white
//                         border border-transparent
//                         hover:border-violet-100
//                         hover:bg-violet-50/50
//                         transition-all duration-150
//                         text-left
//                         group
//                       "
//                     >
//                       <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-lg">
//                         📖
//                       </div>

//                       <div className="flex-1">
//                         <p className="text-sm font-semibold text-slate-900">
//                           Read Content
//                         </p>

//                         <p className="text-[11px] text-slate-400 mt-0.5">
//                           Study this module online
//                         </p>
//                       </div>

//                       <span className="text-violet-500 text-lg group-hover:translate-x-1 transition-transform">
//                         →
//                       </span>
//                     </Link>

//                     {/* Download Notes */}
//                     {module.notesUrl && (
//                       <a
//                         href={module.notesUrl}
//                         download
//                         className="
//                           w-full
//                           flex items-center gap-3
//                           p-3
//                           rounded-xl
//                           bg-white
//                           border border-transparent
//                           hover:border-orange-100
//                           hover:bg-orange-50/40
//                           transition-all duration-150
//                           group
//                         "
//                       >
//                         <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-lg">
//                           📄
//                         </div>

//                         <div className="flex-1">
//                           <p className="text-sm font-semibold text-slate-900">
//                             Download Notes
//                           </p>

//                           <p className="text-[11px] text-slate-400 mt-0.5">
//                             Get the notes for this module
//                           </p>
//                         </div>

//                         <span className="text-orange-500 text-lg group-hover:translate-y-1 transition-transform">
//                           ↓
//                         </span>
//                       </a>
//                     )}

//                     {/* Download Files */}
//                     {module.filesUrl && (
//                       <a
//                         href={module.filesUrl}
//                         download
//                         className="
//                           w-full
//                           flex items-center gap-3
//                           p-3
//                           rounded-xl
//                           bg-white
//                           border border-transparent
//                           hover:border-blue-100
//                           hover:bg-blue-50/40
//                           transition-all duration-150
//                           group
//                         "
//                       >
//                         <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-lg">
//                           📦
//                         </div>

//                         <div className="flex-1">
//                           <p className="text-sm font-semibold text-slate-900">
//                             Download Files
//                           </p>

//                           <p className="text-[11px] text-slate-400 mt-0.5">
//                             Resources and project files
//                           </p>
//                         </div>

//                         <span className="text-blue-500 text-lg group-hover:translate-y-1 transition-transform">
//                           ↓
//                         </span>
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import BottomNav from "./bottomNav";
import Link from "next/link";

export default function CourseModules({
  courseName,
  modules = [],
  onReadContent,
}) {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (moduleId) => {
    setOpenModule((prev) => (prev === moduleId ? null : moduleId));
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-12">

        {/* ================= HEADER ================= */}

        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8 md:mb-10">

          <div className="min-w-0">

            <p className="mb-1 text-[10px] font-bold uppercase tracking-[1.5px] text-violet-600 sm:text-xs">
              Course Modules
            </p>

            <h2 className="truncate text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {courseName}
            </h2>

            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              {modules.length}{" "}
              {modules.length === 1 ? "module" : "modules"} available
            </p>

          </div>

          {/* Module Count */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50 text-sm font-bold text-violet-600 sm:h-12 sm:w-12">
            {modules.length}
          </div>

        </div>


        {/* ================= MODULE LIST ================= */}

        <div className="space-y-3 sm:space-y-4">

          {modules.map((module, index) => {

            const isOpen = openModule === module.id;

            return (
              <div
                key={module.id}
                className={`
                  overflow-hidden
                  rounded-2xl
                  transition-all
                  duration-200
                  ${
                    isOpen
                      ? "shadow-[0_8px_30px_rgba(124,58,237,0.10)]"
                      : ""
                  }
                `}
              >

                {/* ================= MODULE TILE ================= */}

                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  aria-expanded={isOpen}
                  className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                    border
                    bg-white
                    p-3
                    text-left
                    transition-all
                    duration-200
                    sm:p-4
                    md:p-5
                    ${
                      isOpen
                        ? "rounded-t-2xl border-violet-300"
                        : "rounded-2xl border-slate-100 hover:-translate-y-[1px] hover:border-violet-200 hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
                    }
                  `}
                >

                  {/* Module Number */}

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      text-xs
                      font-extrabold
                      transition-all
                      duration-200
                      sm:h-12
                      sm:w-12
                      sm:text-sm
                      md:h-14
                      md:w-14
                      ${
                        isOpen
                          ? "bg-violet-600 text-white"
                          : "bg-violet-50 text-violet-600"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* Module Information */}

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-semibold text-slate-900 sm:text-base md:text-lg">
                      {module.title}
                    </h3>

                    {module.description && (
                      <p className="mt-1 truncate text-[11px] text-slate-400 sm:text-xs md:text-sm">
                        {module.description}
                      </p>
                    )}

                    {module.duration && (
                      <span className="mt-1.5 inline-block text-[10px] text-slate-400 sm:text-[11px] md:text-xs">
                        ◷ {module.duration}
                      </span>
                    )}

                  </div>


                  {/* Arrow */}

                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-lg
                      transition-all
                      duration-200
                      sm:h-9
                      sm:w-9
                      sm:text-xl
                      ${
                        isOpen
                          ? "rotate-90 bg-violet-50 text-violet-600"
                          : "bg-slate-50 text-slate-500"
                      }
                    `}
                  >
                    ›
                  </div>

                </button>


                {/* =================================================
                    DROPDOWN
                ================================================= */}

                {isOpen && (
                  <div className="border-x border-b border-violet-300 bg-white p-2 sm:p-3">

                    <div className="space-y-1.5 rounded-xl bg-slate-50 p-1.5 sm:space-y-2 sm:p-2">

                      {/* ================= READ CONTENT ================= */}

                      <Link
                        href={`/content?course=${encodeURIComponent(
                          courseName
                        )}&module=${encodeURIComponent(module.id)}`}
                        onClick={() => onReadContent?.(module)}
                        className="
                          group
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-transparent
                          bg-white
                          p-3
                          text-left
                          transition-all
                          duration-150
                          hover:border-violet-100
                          hover:bg-violet-50/50
                          sm:gap-4
                          sm:p-4
                        "
                      >

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg sm:h-11 sm:w-11">
                          📖
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                            Read Content
                          </p>

                          <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-xs">
                            Study this module online
                          </p>

                        </div>

                        <span className="shrink-0 text-base text-violet-500 transition-transform group-hover:translate-x-1 sm:text-lg">
                          →
                        </span>

                      </Link>


                      {/* ================= DOWNLOAD NOTES ================= */}

                      {module.notesUrl && (
                        <a
                          href={module.notesUrl}
                          download
                          className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-transparent
                            bg-white
                            p-3
                            text-left
                            transition-all
                            duration-150
                            hover:border-orange-100
                            hover:bg-orange-50/40
                            sm:gap-4
                            sm:p-4
                          "
                        >

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-lg sm:h-11 sm:w-11">
                            📄
                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                              Download Notes
                            </p>

                            <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-xs">
                              Get the notes for this module
                            </p>

                          </div>

                          <span className="shrink-0 text-base text-orange-500 transition-transform group-hover:translate-y-1 sm:text-lg">
                            ↓
                          </span>

                        </a>
                      )}


                      {/* ================= DOWNLOAD FILES ================= */}

                      {module.filesUrl && (
                        <a
                          href={module.filesUrl}
                          download
                          className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-transparent
                            bg-white
                            p-3
                            text-left
                            transition-all
                            duration-150
                            hover:border-blue-100
                            hover:bg-blue-50/40
                            sm:gap-4
                            sm:p-4
                          "
                        >

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg sm:h-11 sm:w-11">
                            📦
                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                              Download Files
                            </p>

                            <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-xs">
                              Resources and project files
                            </p>

                          </div>

                          <span className="shrink-0 text-base text-blue-500 transition-transform group-hover:translate-y-1 sm:text-lg">
                            ↓
                          </span>

                        </a>
                      )}

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>


      {/* =====================================================
          MOBILE BOTTOM NAV
      ===================================================== */}

      {/* <div className="md:hidden">
        <BottomNav />
      </div> */}

    </main>
  );
}