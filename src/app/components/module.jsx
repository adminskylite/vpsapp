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
    <div className="w-full max-w-4xl mx-auto h-[100vh] bg-white p-4 overflow-scroll overflow-x-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] text-violet-600 uppercase mb-1">
            Course Modules
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {courseName}
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            {modules.length} {modules.length === 1 ? "module" : "modules"} available
          </p>
        </div>

        {/* Module count */}
        <div className="w-11 h-11 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 font-bold text-sm">
          {modules.length}
        </div>
      </div>

      {/* Module List */}
      <div className="space-y-3">
        {modules.map((module, index) => {
          const isOpen = openModule === module.id;

          return (
            <div
              key={module.id}
              className={`rounded-2xl transition-all duration-200 ${
                isOpen
                  ? "shadow-[0_8px_30px_rgba(124,58,237,0.10)]"
                  : ""
              }`}
            >
              {/* Module Tile */}
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className={`
                  w-full flex items-center gap-4 p-4
                  bg-white
                  border
                  text-left
                  transition-all duration-200
                  ${
                    isOpen
                      ? "border-violet-300 rounded-t-2xl"
                      : "border-slate-100 rounded-2xl hover:border-violet-200 hover:-translate-y-[1px] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
                  }
                `}
              >
                {/* Number */}
                <div
                  className={`
                    shrink-0
                    w-12 h-12
                    rounded-xl
                    flex items-center justify-center
                    text-sm font-extrabold
                    transition-all duration-200
                    ${
                      isOpen
                        ? "bg-violet-600 text-white"
                        : "bg-violet-50 text-violet-600"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] font-semibold text-slate-900">
                    {module.title}
                  </h3>

                  {module.description && (
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 truncate">
                      {module.description}
                    </p>
                  )}

                  {module.duration && (
                    <span className="inline-block text-[11px] text-slate-400 mt-1.5">
                      ◷ {module.duration}
                    </span>
                  )}
                </div>

                {/* Arrow */}
                <div
                  className={`
                    shrink-0
                    w-9 h-9
                    rounded-full
                    flex items-center justify-center
                    text-xl
                    transition-all duration-200
                    ${
                      isOpen
                        ? "bg-violet-50 text-violet-600 rotate-90"
                        : "bg-slate-50 text-slate-500"
                    }
                  `}
                >
                  ›
                </div>
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="border-x border-b border-violet-300 rounded-b-2xl bg-white p-2">
                  <div className="bg-slate-50 rounded-xl p-2 space-y-1">

                    {/* Read Content */}
                    <Link
                      type="button"
                      href="/content"
                      className="
                        w-full
                        flex items-center gap-3
                        p-3
                        rounded-xl
                        bg-white
                        border border-transparent
                        hover:border-violet-100
                        hover:bg-violet-50/50
                        transition-all duration-150
                        text-left
                        group
                      "
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-lg">
                        📖
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">
                          Read Content
                        </p>

                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Study this module online
                        </p>
                      </div>

                      <span className="text-violet-500 text-lg group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>

                    {/* Download Notes */}
                    {module.notesUrl && (
                      <a
                        href={module.notesUrl}
                        download
                        className="
                          w-full
                          flex items-center gap-3
                          p-3
                          rounded-xl
                          bg-white
                          border border-transparent
                          hover:border-orange-100
                          hover:bg-orange-50/40
                          transition-all duration-150
                          group
                        "
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-lg">
                          📄
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            Download Notes
                          </p>

                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Get the notes for this module
                          </p>
                        </div>

                        <span className="text-orange-500 text-lg group-hover:translate-y-1 transition-transform">
                          ↓
                        </span>
                      </a>
                    )}

                    {/* Download Files */}
                    {module.filesUrl && (
                      <a
                        href={module.filesUrl}
                        download
                        className="
                          w-full
                          flex items-center gap-3
                          p-3
                          rounded-xl
                          bg-white
                          border border-transparent
                          hover:border-blue-100
                          hover:bg-blue-50/40
                          transition-all duration-150
                          group
                        "
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-lg">
                          📦
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            Download Files
                          </p>

                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Resources and project files
                          </p>
                        </div>

                        <span className="text-blue-500 text-lg group-hover:translate-y-1 transition-transform">
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
  );
}