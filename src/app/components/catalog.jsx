"use client";

import { PieChart, CheckCircle2, PenTool, Plane, CircleCheckBig } from "lucide-react";

const categories = [
  {
    title: "VPS Deployment",
    count: "1 Courses",
    icon: PieChart,
    bg: "bg-gradient-to-br from-orange-100 to-rose-100",
    iconColor: "text-rose-500",
    status: "live"
  },
  {
    title: "AWS",
    count: "1 Courses",
    icon: CircleCheckBig,
    bg: "bg-gradient-to-br from-amber-100 to-yellow-100",
    iconColor: "text-emerald-500",
    status: "upcoming"
  },
  {
    title: "Azure",
    count: "1 Courses",
    icon: PenTool,
    bg: "bg-gradient-to-br from-fuchsia-100 to-purple-100",
    iconColor: "text-purple-600",
    status: "upcoming"

  },
  {
    title: "CICD pilelines",
    count: "1 Courses",
    icon: Plane,
    bg: "bg-gradient-to-br from-sky-100 to-indigo-100",
    iconColor: "text-indigo-500",
    status: "upcoming"

  },
];

export default function ExploreCategories() {

    const statusStyles = {
        live: "bg-emerald-500 text-white",
        upcoming: "bg-amber-500 text-white",
    };

    return (
        <div className="w-full max-w-sm mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Explore Categories</h2>
            <button className="cursor-pointer text-sm font-semibold text-violet-600 flex items-center gap-0.5 hover:text-violet-700 transition-colors">
            View All
            <span className="text-base leading-none">›</span>
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
            {categories.map(({ title, count, icon: Icon, bg, iconColor, status }) => (
                
                <button
                    key={title}
                    className="relative group bg-white rounded-2xl p-4 flex flex-col items-start gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-shadow text-left cursor-pointer"
                >
                    <span
                    className={`absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${statusStyles[status]}`}
                    >
                    {status}
                    </span>
                    <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${bg} group-hover:scale-105 transition-transform`}
                    >
                    <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={2} />
                    </div>
                    <div>
                    <p className="font-semibold text-slate-900 text-[15px] leading-tight">
                        {title}
                    </p>
                    <p className="text-slate-400 text-sm mt-0.5">{count}</p>
                    </div>
                </button>
            ))}
        </div>
        </div>
    );
}