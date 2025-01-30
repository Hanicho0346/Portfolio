import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import email from '../../public/assets/email.png';
import emailwhite from '../../public/assets/communication.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image src={logo} className='w-36 h-10 mx-auto mb-2 hover:scale-105 transition-transform duration-300' alt='logo' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='w-max flex items-center gap-2 mx-auto'
        >
          <Image src={isDarkMode ? emailwhite : email} className='w-6 hover:scale-110 transition-transform duration-300' alt="email" />
          <span className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
            hanagebremedhin2019@gmail.com
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'
      >
        <p className='text-sm text-gray-700 dark:text-gray-300'>copyright &copy;2025 Hana Gebremedhin. All rights reserved</p>
        <ul className='flex items-center gap-6'>
          <li>
            <a
              target='_blank'
              href="https://github.com/Hanicho0346/"
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:block">GitHub</span>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href="https://www.linkedin.com/in/hana-gebremedhin/"
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:block">LinkedIn</span>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;