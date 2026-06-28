"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import mentalHealthImg from "../../public/assets/Screenshot (238).png";
import ecommerceImg from "../../public/assets/Screenshot (258).png";
import realEstateImg from "../../public/assets/Screenshot (259).png";
import carRentalImg from "../../public/assets/car-rental.jpg";
import billingImg from "../../public/assets/Screenshot (257).png";

const PROJECTS = [
  {
    id: "mental-health",
    title: "Mental Health App",
    tagline: "Mindful tracking for daily wellbeing",
    description: "A mobile-first wellness companion that helps users track moods, build meditation streaks, and surface patterns in their mental health over time.",
    role: "Solo Frontend Developer",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Hanicho0346/Mental-health-app",
    image: mentalHealthImg,
    categories: ["Frontend", "React"],
    featured: true,
    status: "Live",
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    tagline: "Luxury listings, effortless discovery",
    description: "A property marketplace with advanced filtering and immersive listing pages designed to convert browsers into enquiries.",
    role: "Solo Frontend Developer",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Hanicho0346/Real-Estate",
    image: realEstateImg,
    categories: ["Frontend", "React"],
    featured: true,
    status: "Live",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    tagline: "Modern storefront with full shopping flow",
    description: "A complete e-commerce experience covering product browsing, cart management and a polished checkout flow with secure auth.",
    role: "Solo Frontend Developer",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Hanicho0346/E-commerce",
    image: ecommerceImg,
    categories: ["Full Stack", "React"],
    status: "Completed",
  },
  {
    id: "car-rental",
    title: "Car Rental System",
    tagline: "Team-built booking platform for vehicle rentals",
    description: "A full booking platform for a car rental service built collaboratively. I owned the user-facing frontend and booking flow.",
    role: "Frontend · Team Project",
    tech: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    github: "https://github.com/DirsanA/autoRental",
    image: carRentalImg,
    categories: ["Team", "Frontend", "React"],
    team: true,
    status: "Completed",
  },
  {
    id: "billing",
    title: "Electricity Billing System",
    tagline: "Team-built utility billing & analytics",
    description: "A billing platform for an electricity provider with customer management, bill generation and usage analytics.",
    role: "Frontend · Team Project",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/Amen401/E-Billing",
    image: billingImg,
    categories: ["Team", "Full Stack", "React"],
    team: true,
    status: "Completed",
  },
];

const FILTERS = ["All", "Frontend", "Full Stack", "React", "Team"];

export default function Work({ isDarkMode }) {
  const [filter, setFilter] = useState("All");

  const projects = useMemo(
    () => filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  return (
    <section
      id="Works"
      className={`relative w-full px-6 md:px-[12%] py-16 scroll-mt-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#040f18]" : "bg-slate-50"}`}
    >
      {/* Background accents */}
      <div className={`absolute -top-32 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-teal-900/15" : "bg-cyan-200/40"}`} />
      <div className={`absolute bottom-0 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none ${isDarkMode ? "bg-indigo-900/15" : "bg-teal-200/40"}`} />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-10"
      >
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
          <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
            My Portfolio
          </span>
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500" : "bg-teal-400"}`} />
        </div>
        <h2 className={`text-5xl font-Ovo ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
            Work
          </span>
        </h2>
        <p className={`max-w-2xl mx-auto mt-4 leading-relaxed font-Ovo ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
          Five builds spanning solo frontend work and team collaborations —
          from a mental health companion to billing and rental platforms.
        </p>
      </motion.div>

      {/* Filter bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex flex-wrap justify-center gap-3 mb-12"
      >
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-5 py-2 rounded-full text-sm border transition-all duration-300 font-Ovo overflow-hidden ${
                active
                  ? "text-white border-transparent shadow-lg shadow-teal-500/30"
                  : isDarkMode
                    ? "bg-transparent text-slate-300 border-slate-600 hover:border-teal-400 hover:text-teal-400"
                    : "bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:text-teal-600"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects grid */}
      {projects.length === 0 ? (
        <p className={`text-center font-Ovo mt-16 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
          No projects in this category yet.
        </p>
      ) : (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index, isDarkMode }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl transition-shadow duration-300 ${isDarkMode ? "border-slate-700 bg-slate-800/60 hover:shadow-teal-900/40" : "border-slate-200 bg-white hover:shadow-teal-300/40"}`}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)] [mask-composite:exclude] p-[1.5px]" />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full bg-black/70 text-white backdrop-blur border border-white/20">
              ★ Featured
            </span>
          )}
          {project.team && (
            <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full bg-indigo-600/80 text-white backdrop-blur">
              Team
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full backdrop-blur border flex items-center gap-1.5 ${project.status === "Live" ? "bg-emerald-500/80 text-white border-emerald-400/40" : "bg-black/50 text-gray-200 border-white/20"}`}>
            {project.status === "Live" && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 relative">
        <p className={`text-xs uppercase tracking-widest mb-1 font-Ovo ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
          {project.role}
        </p>
        <h3 className={`text-xl font-semibold font-Ovo group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-indigo-500 transition-all duration-300 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          {project.title}
        </h3>
        <p className={`text-sm italic mt-0.5 font-Ovo ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
          {project.tagline}
        </p>
        <p className={`text-sm mt-3 leading-relaxed flex-1 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-[11px] px-2.5 py-1 rounded-md border hover:border-teal-400 hover:text-teal-500 transition-colors ${isDarkMode ? "border-slate-600 text-slate-300 bg-slate-700/50" : "border-slate-200 text-slate-600 bg-slate-50"}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className={`flex items-center gap-3 mt-5 pt-4 border-t ${isDarkMode ? "border-slate-700" : "border-slate-100"}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm transition-colors duration-200 font-Ovo group/link ${isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"}`}
          >
            <FaGithub className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-teal-500 hover:text-teal-400 hover:underline font-Ovo ml-auto"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
