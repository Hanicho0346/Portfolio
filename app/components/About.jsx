import React, { useState, useEffect } from "react";
import Image from "next/image";
import { infoList, toolsData } from "../../public/assets/assets.js"; 
import user from "../../public/assets/user.jpg";
import { motion } from "framer-motion"
const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <motion.div className="w-full px-[12%] py-10 scroll-mt-20" 
    initial={{scale:0}}
    whileInView={{scale:1}}
    transition={{duration:1}}
    >
      <motion.h4
        initial={{scale:0,y:-20}}
        whileInView={{scale:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
        initial={{scale:0,y:-20}}
        whileInView={{scale:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
      className="text-center text-5xl font-Ovo">About Me</motion.h2>
      <motion.div
           initial={{scale:0}}
           whileInView={{scale:1}}
           transition={{duration:0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
             initial={{scale:0,scale:0.9}}
             whileInView={{scale:1,scale:1}}
             transition={{duration:0.5}}
        className="w-64 sm:w-80">
          <Image 
            src={user}
            alt="User Profile" 
            width={320} 
            height={320} 
            className="w-full rounded-3xl max-w-none"
          />
        </motion.div>

        <motion.div 
             initial={{scale:0}}
             whileInView={{scale:1}}
             transition={{duration:0.6,delay:0.8}}
        className="flex-1">
          <p className="text-gray-700 dark:text-white">
            I am an experienced front-end developer with over a decade of
            professional expertise in this field. Throughout my career, I have had
            the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <motion.ul
               initial={{scale:0}}
               whileInView={{scale:1}}
               transition={{duration:0.8,delay:1}}
          className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-4 mt-6">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
              whileInView={{scale:1}}
                key={index}
                className="border border-gray-400 
                rounded-xl p-6 cursor-pointer hover:bg-lightHover 
                hover:-translate-y-1 duration-500 hover:shadow-lg
                 dark:bg-gray-800 dark:border-gray-600
                  dark:hover:bg-gray-700 dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image src={icon} alt={title} width={40} height={40} />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
               initial={{y:20,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{duration:0.5,delay:1.3}}
          className="my-6 text-gray-700 dark:text-white font-Ovo">Tools I Use</motion.h4>
          <motion.ul
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.6,delay:1.5}}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map(({ name, icon }, index) => (
              <motion.li
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}  
              transition={{ duration: 0.5, delay: 1.3 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                <Image src={icon} alt={name} width={28} height={28} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

    
    </motion.div>
  );
};

export default About;
