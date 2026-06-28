"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "../../public/assets/arrow.jpg";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending…");

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "eb741534-c39e-4a8a-ae20-46bfd97d23d0");

    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formDataObj });
    const data = await response.json();

    if (data.success) {
      setResult("Message sent! I'll get back to you soon.");
      event.target.reset();
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className={`relative w-full scroll-mt-20 py-24 px-6 md:px-[12%] overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#020e14]" : "bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50"}`}
    >
      {/* Blobs */}
      <div className={`absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[120px] animate-pulse pointer-events-none ${isDarkMode ? "bg-teal-500/15" : "bg-teal-300/20"}`} />
      <div className={`absolute -bottom-32 right-1/4 w-[36rem] h-[36rem] rounded-full blur-[120px] animate-pulse pointer-events-none [animation-delay:1.5s] ${isDarkMode ? "bg-indigo-500/15" : "bg-cyan-300/20"}`} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500/60" : "bg-teal-400"}`} />
          <span className={`text-xs uppercase tracking-[0.2em] font-medium ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
            Let's connect
          </span>
          <span className={`h-px w-10 ${isDarkMode ? "bg-teal-500/60" : "bg-teal-400"}`} />
        </div>

        <h2 className={`text-center text-4xl sm:text-5xl font-bold mb-3 font-Ovo ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
            Me
          </span>
        </h2>
        <p className={`text-center mb-12 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
          Have a project in mind or just want to say hi? Drop me a message.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className={`max-w-2xl mx-auto p-8 rounded-3xl shadow-2xl ${isDarkMode ? "border border-white/10 bg-white/5 backdrop-blur-xl shadow-teal-900/40" : "border border-teal-100 bg-white/80 backdrop-blur-xl shadow-teal-200/40"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 ${isDarkMode ? "bg-white/10 border-white/15 text-white placeholder-slate-400 focus:bg-white/15" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"}`}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              required
              className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 ${isDarkMode ? "bg-white/10 border-white/15 text-white placeholder-slate-400 focus:bg-white/15" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"}`}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project…"
            rows={6}
            required
            className={`w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 mb-6 resize-none ${isDarkMode ? "bg-white/10 border-white/15 text-white placeholder-slate-400 focus:bg-white/15" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"}`}
          />

          {result && (
            <p className={`text-center text-sm mb-4 ${isDarkMode ? "text-teal-300" : "text-teal-600"}`}>{result}</p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-10 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold flex items-center gap-2 shadow-lg shadow-teal-500/40 transition-all duration-200 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                {isSubmitting ? "Sending…" : "Send Message"}
                {!isSubmitting && (
                  <Image src={arrow} alt="arrow" width={16} height={16} className="w-4 invert group-hover:translate-x-1 transition-transform" />
                )}
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
