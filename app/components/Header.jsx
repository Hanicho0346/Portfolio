import Image from "next/image";
import user from "../../public/assets/user.jpg";
import download from "../../public/assets/downloads.png";
import arrow from "../../public/assets/arrow.jpg";
import hand from "../../public/assets/wave.png";
import { motion } from "framer-motion";

const Header = () => {
  const text = "Front End Developer";
  const textArray = text.split(""); 

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
   
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={user}
          alt="User Image"
          className="rounded-full w-32"
          width={128}
          height={128}
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Hana Gebremedhin
        <motion.div
          animate={{ rotate: [0, 20, -20, 20, 0] }} 
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <Image
            alt="Arrow"
            className="w-6 mb-2"
            src={hand}
            width={27}
            height={24}
            
          />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        {textArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.1 }} 
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a frontend beginner, programming since the end of 2022. I am really
        interested in programming.
      </motion.p>


      <div className="flex gap-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={arrow} alt="Arrow" className="w-4" width={16} height={16} />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/assets/Resume (3).pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 bg-white dark:text-black flex items-center gap-2"
        >
          My Resume
          <Image
            src={download}
            alt="Download Icon"
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;