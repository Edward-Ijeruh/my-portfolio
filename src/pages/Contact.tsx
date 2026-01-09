"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main
      className="max-w-7xl mx-auto md:h-[90vh] px-6 py-6 md:px-16 md:py-24"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-semibold text-center text-[#052f4f] mb-14"
      >
        Contact Me
      </motion.h1>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* EMAIL */}
        <motion.a
          href="mailto:ijeruh20@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden p-8 rounded-2xl border-2 border-[#052f4f]
               bg-[#f8f1de] cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <span
            className="absolute inset-0 bg-[#052f4f] 
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-transform duration-500 ease-out"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <FiMail className="text-4xl text-[#052f4f] group-hover:text-white transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-[#052f4f] group-hover:text-white transition-colors duration-300">
              Email
            </h3>
            <p className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
              ijeruh20@gmail.com
            </p>
          </div>
        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          href="https://wa.me/2349056599271"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden p-8 rounded-2xl border-2 border-[#052f4f]
               bg-[#f8f1de] cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <span
            className="absolute inset-0 bg-[#052f4f] 
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-transform duration-500 ease-out"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <FiMessageCircle className="text-4xl text-[#052f4f] group-hover:text-white transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-[#052f4f] group-hover:text-white transition-colors duration-300">
              WhatsApp
            </h3>
            <p className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
              09056599271
            </p>
          </div>
        </motion.a>

        {/* CALL */}
        <motion.a
          href="tel:09056599271"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden p-8 rounded-2xl border-2 border-[#052f4f]
               bg-[#f8f1de] cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <span
            className="absolute inset-0 bg-[#052f4f] 
                 translate-x-[-100%] group-hover:translate-x-0 
                 transition-transform duration-500 ease-out"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-4">
            <FiPhone className="text-4xl text-[#052f4f] group-hover:text-white transition-colors duration-300" />
            <h3 className="text-xl font-semibold text-[#052f4f] group-hover:text-white transition-colors duration-300">
              Call
            </h3>
            <p className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
              09056599271 <br /> 08063471067
            </p>
          </div>
        </motion.a>
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-600 mt-16"
      >
        I usually respond within a few minutes
      </motion.p>
    </main>
  );
}
