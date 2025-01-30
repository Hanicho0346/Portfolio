import React from "react";
import Image from "next/image";
import { ServiceData } from "../../public/assets/assets.js";
import rightArrow from "../../public/assets/right-arrow.png";
import { delay, motion } from "framer-motion";

const Service = () => {
  return (
    <section id="service" className="w-full px-6 md:px-[12%] py-12 scroll-mt-20">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center "
      >
        <motion.h4
          initial={{ y: -20, scale: 0 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-Ovo text-gray-800 dark:text-white"
        >
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-5xl font-Ovo text-gray-900 dark:text-white"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed dark:text-white"
        >
          I am a frontend developer from Ethiopia. I have worked on various
          projects, including class projects with my team, and completed a remote
          internship in frontend development.
        </motion.p>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration: 0.6,delay:0.9}}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {ServiceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="border border-gray-300 rounded-lg p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 bg-white dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 font-medium hover:underline"
            >
              Read more
              <Image src={rightArrow} alt="Arrow" width={16} height={16} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
