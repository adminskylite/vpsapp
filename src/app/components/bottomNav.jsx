'use client'
import { useState } from "react";
import { BookOpen, FlaskConical, ListChecks, Package, Settings } from "lucide-react";

const TABS = [
  { key: "courses", label: "Courses", icon: BookOpen },
  { key: "lab", label: "Lab", icon: FlaskConical },
  { key: "quiz", label: "Quiz", icon: ListChecks },
  { key: "packets", label: "Packets", icon: Package },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function BottomNav() {
  const [active, setActive] = useState("courses");

  return (
    <div className="w-full h-[10vh] min-h-[80px] overflow-hidden">
      <nav className="relative w-full h-full bg-white border-t border-gray-200 shadow-[0_-10px_30px_rgba(76,29,149,0.12)] flex items-center justify-between px-3">
        {TABS.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;

          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="relative flex-1 h-full flex flex-col items-center justify-center gap-1 cursor-pointer group"
              aria-label={label}
              aria-current={isActive}
            >
              <Icon
                size={19}
                strokeWidth={isActive ? 2.4 : 2}
                className={`transition-colors duration-200 ${
                  isActive ? "text-violet-600" : "text-slate-300 group-hover:text-slate-400"
                }`}
              />
              <span
                className={`text-[10px] font-semibold transition-colors duration-200 ${
                  isActive ? "text-violet-600" : "text-slate-300 group-hover:text-slate-400"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}