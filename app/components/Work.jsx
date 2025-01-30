import React from "react";
import { workData } from "../../public/assets/assets.js";
import send from "../../public/assets/right-arrow.png";
import rightarrow from "../../public/assets/up-right-arrow.png";
import Image from 'next/image';
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      id="work" className="w-full px-6 lg:px-16 py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-4xl lg:text-5xl font-Ovo font-bold text-gray-800 dark:text-white mb-4"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-gray-600 dark:text-white mb-12"
      >
        Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer min-h-[300px] transition-all duration-300 ease-in-out transform hover:scale-105"
            style={{ background: `url(${project.bgImage.src}) no-repeat center center`, backgroundSize: 'cover' }}
          >
            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-6 group-hover:bg-opacity-100 dark:bg-gray-800 dark:bg-opacity-90 transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-semibold text-lg text-gray-800 dark:text-white"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {project.description}
                  </motion.p>
                </div>
                <div className="flex justify-center items-center  text-white rounded-full w-10 h-10 shadow-lg bg-lime-200 group-hover:bg-lime-500 transition-colors duration-300 ease-in-out">
                  <a href=""></a> <Image src={send} alt="send icon" className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto mt-16 hover:bg-gray-100 dark:text-black dark:bg-white dark:border-white dark:hover:bg-gray-700 transition duration-300 ease-in-out"
      >
        Show More
        <Image src={rightarrow} alt="right arrow" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
