import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import email from "../../public/assets/email.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`relative w-full pt-16 pb-8 px-6 md:px-[12%] overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#020e14] text-slate-200" : "bg-slate-900 text-slate-200"}`}>
      {/* Background accents */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <Image src={logo} alt="Logo" className="w-14 mb-4 brightness-200" />
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Junior Frontend Developer building thoughtful, polished web experiences.
          </p>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-teal-400 mb-3 font-semibold">
            Get in touch
          </h4>
          <a
            href="mailto:hanagebremedhin2019@gmail.com"
            className="inline-flex items-center gap-3 text-sm text-slate-300 hover:text-teal-400 transition-colors group"
          >
            <span className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-400 transition-colors">
              <Image src={email} alt="email" width={16} height={16} className="invert" />
            </span>
            hanagebremedhin2019@gmail.com
          </a>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-teal-400 mb-3 font-semibold">
            Follow me
          </h4>
          <div className="flex gap-3">
            <a
              href="https://github.com/Hanicho0346"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 hover:-translate-y-1 transition-all duration-200"
            >
              <FaGithub className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/hana-gebremedhin"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 hover:-translate-y-1 transition-all duration-200"
            >
              <FaLinkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative pt-6 border-t border-white/10 text-center text-xs text-slate-500">
        © 2025 Hana Gebremedhin. Crafted with care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
