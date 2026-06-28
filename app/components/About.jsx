import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { infoList, toolsData } from "../../public/assets/assets.js";
import user from "../../public/assets/user.jpg";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="About"
      className={`relative w-full px-6 md:px-[12%] py-24 scroll-mt-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#040f18]" : "bg-slate-50"}`}
    >
      {/* Background accents */}
      <div className={`absolute top-20 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-teal-900/30" : "bg-teal-200/40"}`} />
      <div className={`absolute bottom-20 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-indigo-900/20" : "bg-cyan-200/30"}`} />

      <div className="relative">
        {/* Section label */}
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
          <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
            Introduction
          </span>
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
        </div>

        <h2 className={`text-center text-4xl sm:text-5xl font-bold mb-16 font-Ovo ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
            Me
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0 group"
          >
            <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500`} />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-400 to-indigo-500 opacity-80" />
            <Image
              src={user}
              alt="Hana Gebremedhin"
              width={320}
              height={320}
              className={`relative w-64 sm:w-80 rounded-3xl object-cover shadow-2xl border-4 group-hover:scale-[1.02] transition-transform duration-500 ${isDarkMode ? "border-slate-800" : "border-white"}`}
            />
            <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-400 border-4 shadow-lg flex items-center justify-center ${isDarkMode ? "border-slate-900" : "border-white"}`}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className={`leading-relaxed text-base mb-8 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
              I'm a passionate frontend developer from Ethiopia. I've worked on
              solo projects and collaborated with teams on real-world platforms
              — from mental health apps to e-commerce and billing systems. I
              love crafting UIs that feel effortless to use.
            </p>

            {/* Info cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className={`group relative border rounded-2xl p-5 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden ${isDarkMode ? "border-teal-900 bg-slate-900 hover:shadow-teal-900/30" : "border-teal-100 bg-white hover:shadow-teal-200/50"}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? "from-teal-900/20 to-indigo-900/20" : "from-teal-50 to-cyan-50"}`} />
                  <div className="relative">
                    <Image src={icon} alt={title} width={40} height={40} className="mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className={`font-semibold mb-1 ${isDarkMode ? "text-white" : "text-slate-800"}`}>{title}</h3>
                    <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Tools */}
            <h4 className={`font-semibold mb-4 text-sm uppercase tracking-widest flex items-center gap-2 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              <span className={`h-px w-6 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
              Tools I Use
            </h4>
            <ul className="flex flex-wrap gap-3">
              {toolsData.map(({ name, icon }, index) => (
                <li
                  key={index}
                  title={name}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-xl border hover:border-teal-400 hover:scale-125 hover:-translate-y-1 hover:rotate-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg ${isDarkMode ? "border-teal-900 bg-slate-900 hover:shadow-teal-900/50" : "border-teal-100 bg-white hover:shadow-teal-200/50"}`}
                >
                  <Image src={icon} alt={name} width={28} height={28} />
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-white text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${isDarkMode ? "bg-slate-800" : "bg-slate-700"}`}>
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
