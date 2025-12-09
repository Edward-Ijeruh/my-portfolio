import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-12 bg-[#f8f1de] border-t border-[#052f4f]/30"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center px-5">
        {/* Header */}
        <h2 className="text-xl font-semibold text-[#052f4f] mb-6">Follow Me</h2>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://x.com/edwardijeruh?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl text-white shadow-md flex items-center justify-center 
                       bg-[#052f4f] text-2xl transition-transform hover:scale-110 hover:text-[#052f4f] hover:bg-[#eae3cf]"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://github.com/Edward-Ijeruh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl text-white shadow-md flex items-center justify-center 
                       bg-[#052f4f] text-2xl transition-transform hover:scale-110 hover:text-[#052f4f] hover:bg-[#eae3cf]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/edward-ijeruh-074a2a322"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl text-white shadow-md flex items-center justify-center 
                       bg-[#052f4f] text-2xl transition-transform hover:scale-110 hover:text-[#052f4f] hover:bg-[#eae3cf]"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#052f4f]/80">
          © {new Date().getFullYear()} Edward Ijeruh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
