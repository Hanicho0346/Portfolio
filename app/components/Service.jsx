import React from "react";
import Image from "next/image";
import { ServiceData } from "../../public/assets/assets.js";
import rightArrow from "../../public/assets/right-arrow.png";

const filtered = ServiceData.filter((s) => !/ux|ui/i.test(s.title));
const fallbackIcon = filtered[0]?.icon ?? ServiceData[0]?.icon;
const fallbackIcon2 = filtered[1]?.icon ?? fallbackIcon;

const EXTRA = [
  {
    icon: fallbackIcon,
    title: "Mobile App Development",
    description: "Cross-platform mobile experiences with React Native — smooth, native-feeling apps that work on iOS and Android.",
    link: "#contact",
  },
  {
    icon: fallbackIcon2,
    title: "Full Stack Development",
    description: "End-to-end web apps with React on the front and Node, Express and MongoDB powering the backend and APIs.",
    link: "#contact",
  },
];

const SERVICES = [...filtered, ...EXTRA];

const Service = ({ isDarkMode }) => {
  return (
    <section
      id="My Service"
      className={`relative w-full px-6 md:px-[12%] py-24 scroll-mt-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#020e14]" : "bg-white"}`}
    >
      {/* Background accents */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-teal-900/20" : "bg-teal-100/60"}`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-indigo-900/20" : "bg-cyan-100/60"}`} />

      <div className="relative">
        {/* Section label */}
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
          <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
            What I offer
          </span>
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-200"}`} />
        </div>

        <h2 className={`text-center text-4xl sm:text-5xl font-bold mb-4 font-Ovo ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          My Services
        </h2>
        <p className={`text-center max-w-xl mx-auto mb-16 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
          I'm a frontend developer from Ethiopia with team project experience
          and a remote frontend internship under my belt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-7 border backdrop-blur hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 ${isDarkMode ? "border-teal-900 bg-slate-900/80 hover:shadow-teal-900/50" : "border-teal-100 bg-teal-50/60 hover:shadow-teal-300/40"}`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full group-hover:bg-white/10 blur-2xl transition-all duration-500" />

              <span className={`absolute top-5 right-6 text-4xl font-bold select-none transition-colors duration-300 group-hover:text-white/20 ${isDarkMode ? "text-teal-900" : "text-teal-100"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-none group-hover:bg-white/15 transition-all duration-300 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
                  <Image src={icon} alt={title} width={32} height={32} className="group-hover:invert transition-all duration-300" />
                </div>
                <h3 className={`text-lg font-bold mb-2 group-hover:text-white transition-colors duration-300 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 group-hover:text-teal-50 transition-colors duration-300 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {description}
                </p>
                <a
                  href={link}
                  className={`inline-flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors duration-300 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}
                >
                  Read more
                  <Image src={rightArrow} alt="arrow" width={14} height={14} className="group-hover:invert group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
