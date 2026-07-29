'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignupForm() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your signup API
    console.log(form);
    router.push("/auth");
  }

  return (
    <main className="h-screen overflow-y-auto flex items-center justify-center bg-linear-to-br from-[#7C3AED] via-[#6C3EF4] to-[#5126D6] p-4">
      <section className="relative w-full max-w-[390px] min-h-full max-h-[820px] overflow-hidden rounded-[10px] shadow-[0_30px_80px_rgba(0,0,0,.25)] flex flex-col bg-linear-to-b from-[#6C3EF4] to-[#5126D6]">

        {/* ===== Header zone ===== */}
        <div className="relative flex-[0_0_26%] min-h-[130px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute left-1/2 top-4 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute left-6 top-8 h-16 w-16 rounded-full border border-dashed border-white/15" />
          <div className="absolute right-8 bottom-6 h-10 w-10 rounded-full border border-dashed border-white/15" />

          <span className="relative rounded-full bg-white/15 px-4 py-1 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
            Querlabs
          </span>
          <h1 className="relative mt-3 text-2xl font-extrabold text-white">
            Create Account
          </h1>
          <p className="relative mt-1 text-xs text-white/70">
            Start your VPS &amp; DevOps journey
          </p>
        </div>

        {/* ===== Form card ===== */}
        <form
          onSubmit={handleSubmit}
          className="relative flex-1 min-h-0 rounded-t-[2px] bg-white p-2 flex flex-col overflow-y-auto"
        >
          <label className="text-xs font-semibold text-slate-600 mb-1.5">
            Username
          </label>
          <div className="mb-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition">
            <User size={18} className="text-slate-400 shrink-0" />
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="e.g. rohit_dev"
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              required
            />
          </div>

          <label className="text-xs font-semibold text-slate-600 mb-1.5">
            Email
          </label>
          <div className="mb-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition">
            <Mail size={18} className="text-slate-400 shrink-0" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              required
            />
          </div>

          <label className="text-xs font-semibold text-slate-600 mb-1.5">
            Phone Number
          </label>
          <div className="mb-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition">
            <Phone size={18} className="text-slate-400 shrink-0" />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              required
            />
          </div>

          <label className="text-xs font-semibold text-slate-600 mb-1.5">
            Password
          </label>
          <div className="mb-6 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition">
            <Lock size={18} className="text-slate-400 shrink-0" />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type={showPass ? "text" : "password"}
              placeholder="Min. 8 characters"
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="text-slate-400 shrink-0"
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={() => router.push("/main")}
            className="mt-auto inline-flex h-[52px] w-full items-center justify-center gap-1.5 rounded-[18px] bg-linear-to-r from-[#7C3AED] to-[#5126D6] text-base font-bold text-white shadow-[0_15px_35px_rgba(108,62,244,.35)] transition-all duration-300 hover:scale-[1.02] active:scale-100 cursor-pointer"
          >
            Sign Up
            <ArrowRight size={20} strokeWidth={3} />
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="font-semibold text-violet-600 cursor-pointer"
            >
              Log in
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}