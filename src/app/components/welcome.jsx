'use client'
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WelcomeCard() {
    const router = useRouter()

    function route(){
        router.push("/auth")
    }
    return (
        <main className="h-screen overflow-hidden flex items-center justify-center bg-linear-to-br from-[#7C3AED] via-[#6C3EF4] to-[#5126D6] p-5">
        <section className="relative w-full max-w-[390px] h-full max-h-[820px] overflow-hidden rounded-[36px] shadow-[0_30px_80px_rgba(0,0,0,.25)] flex flex-col bg-linear-to-b from-[#6C3EF4] to-[#5126D6]">

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
        </main>
    );
}