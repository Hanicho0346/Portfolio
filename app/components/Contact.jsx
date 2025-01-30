import React, { useState } from "react";
import Image from "next/image";
import rightarrow from "../../public/assets/right-arrow.png";
import { motion } from "framer-motion";
import rightarrowwhite from "../../public/assets/arrow-right.png"
const Contact = ({isDarkMode}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "eb741534-c39e-4a8a-ae20-46bfd97d23d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
      setFormData({ name: '', email: '', message: '' });
    } else {
      setResult(data.message); 
    }

    setIsSubmitting(false); 
  };

  return (
    <section id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Lets get in touch
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        Contact With Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-2xl mx-auto mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.input
            className="w-full p-4 border-2 border-gray-300 rounded-lg bg-white focus:outline-none 
            focus:ring-2 focus:ring-blue-500 transition-shadow duration-300 ease-in-out shadow-md 
            hover:shadow-lg dark:bg-darkHover/30 dark:border-white/90"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            initial={{s:-50, opacity: 0 }}
            whileInView={{ x:0,opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
          <motion.input
            className="w-full p-4 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg dark:bg-darkHover/30 dark:border-white/90"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            initial={{x:50, opacity: 0 }}
            whileInView={{ x:0,opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
        </div>

        <motion.textarea
          className="w-full p-4 border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg mt-6 mb-6 dark:bg-darkHover/30 dark:border-white/90"
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Enter your message"
          required
          initial={{y:100, opacity: 0 }}
          whileInView={{y:0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2
           bg-black/80 dark:text-white text-white 
           rounded-full mx-auto hover:bg-black 
           duration-500 disabled:opacity-50 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          disabled={isSubmitting}
          initial={{ opacity: 0 }}
          whileHover={{scale:1.05}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          {isSubmitting ? (
            <span>{result}</span>
          ) : (
            <>
              Submit now
              <Image src={rightarrowwhite} alt="Arrow" className="w-4" />
            </>
          )}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
