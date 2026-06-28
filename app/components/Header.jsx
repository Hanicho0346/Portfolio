"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "../../public/assets/arrow.jpg";
import download from "../../public/assets/downloads.png";
import hand from "../../public/assets/wave.png";
import user from "../../public/assets/user.jpg";

const STATS = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 2, suffix: "+", label: "Years coding" },
  { value: 3, suffix: "", label: "Team collabs" },
];

function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

const Header = ({ isDarkMode }) => {
  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-300 ${isDarkMode ? "bg-[#020e14] text-white" : "bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 text-slate-900"}`}>
      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-[120px] animate-pulse ${isDarkMode ? "bg-teal-500/25" : "bg-teal-300/30"}`} />
        <div className={`absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full blur-[120px] animate-pulse [animation-delay:1s] ${isDarkMode ? "bg-cyan-500/20" : "bg-cyan-300/25"}`} />
        <div className={`absolute -bottom-32 left-1/3 w-[32rem] h-[32rem] rounded-full blur-[120px] animate-pulse [animation-delay:2s] ${isDarkMode ? "bg-indigo-500/15" : "bg-indigo-200/20"}`} />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative mb-6 px-4 py-1.5 rounded-full border text-xs uppercase tracking-[0.2em] font-medium backdrop-blur ${isDarkMode ? "border-teal-400/30 bg-teal-400/10 text-teal-300" : "border-teal-400/40 bg-teal-50 text-teal-700"}`}
      >
        <span className="inline-block w-2 h-2 mr-2 rounded-full bg-emerald-400 animate-pulse" />
        Junior Frontend Developer · Available for hire
      </motion.span>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 blur-xl opacity-60 scale-125 animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 scale-110 p-[2px]">
          <div className="w-full h-full rounded-full" />
        </div>
        <Image
          src={user}
          alt="Hana Gebremedhin"
          width={144}
          height={144}
          className="relative rounded-full border-4 border-white/20 shadow-2xl w-32 h-32 object-cover"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`flex items-center gap-2 text-lg font-light tracking-wide mb-3 ${isDarkMode ? "text-teal-300" : "text-teal-600"}`}
      >
        <Image src={hand} alt="wave" width={24} height={24} className="w-6" />
        Hi, I'm Hana Gebremedhin
      </motion.h3>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`text-5xl sm:text-7xl font-bold text-center leading-[1.05] mb-4 tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
      >
        Front{" "}
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500">
          End
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full" />
        </span>{" "}
        Developer
      </motion.h1>

      {/* Sub-copy */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`max-w-xl text-center leading-relaxed text-base mb-10 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
      >
        Building thoughtful, polished web experiences since 2022. I care about
        clean code, great UI, and shipping things that actually work.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#contact"
          className="group relative px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-medium flex items-center gap-2 shadow-lg shadow-teal-500/40 transition-all duration-200 hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Contact Me
            <Image src={arrow} alt="arrow" width={16} height={16} className="w-4 invert group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
        <a
          href="/assets/Hana_Gebremedhin_Resume_2026.pdf"
          download
          className={`px-8 py-3 rounded-full border font-medium flex items-center gap-2 backdrop-blur transition-all duration-200 hover:scale-105 ${isDarkMode ? "border-white/30 bg-white/10 hover:bg-white/20 text-white" : "border-teal-300 bg-white/60 hover:bg-white text-slate-800"}`}
        >
          My Resume
          <Image src={download} alt="download" width={16} height={16} className={`w-4 ${isDarkMode ? "invert" : ""}`} />
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`relative mt-14 grid grid-cols-3 gap-6 sm:gap-12 px-6 py-5 rounded-2xl backdrop-blur-xl ${isDarkMode ? "border border-white/10 bg-white/5" : "border border-teal-200 bg-white/70 shadow-lg"}`}
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className={`text-[11px] sm:text-xs uppercase tracking-widest mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-widest uppercase ${isDarkMode ? "text-teal-400/60" : "text-teal-600/60"}`}>
        <span>Scroll</span>
        <div className={`w-px h-8 bg-gradient-to-b to-transparent animate-pulse ${isDarkMode ? "from-teal-400/60" : "from-teal-600/60"}`} />
      </div>
    </div>
  );
};

export default Header;
