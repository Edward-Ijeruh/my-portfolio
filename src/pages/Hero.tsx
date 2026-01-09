import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const Hero: React.FC = () => {
  return (
    <section
      className="max-w-7xl mx-auto md:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 py-6 md:px-16 md:py-24"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-[#052f4f]">
          Hi, I'm Edward
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Frontend Developer building clean, modern, and interactive digital
          experiences using React, Next.js, and Tailwind.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* View CV button */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-3 rounded-xl border-2 border-[#052f4f] bg-[#052f4f] text-white font-medium transition-all duration-300 ease-out group"
          >
            <span className="relative z-10 group-hover:text-[#052f4f] transition-colors duration-300">
              View My CV
            </span>
            <span className="absolute inset-0 bg-[#f8f1de] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </a>

          {/* Contact button */}
          <a
            href="/contact"
            className="relative overflow-hidden px-6 py-3 rounded-xl border-2 border-[#052f4f] bg-[#f8f1de] text-[#052f4f] font-medium transition-all duration-300 ease-out group"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Contact Me
            </span>
            <span className="absolute inset-0 bg-[#052f4f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </a>
        </div>

        {/* Tech stack */}
        <div className="mt-10">
          <p className="text-gray-600 text-sm uppercase tracking-widest mb-4">
            Tech Stack
          </p>

          <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-10 text-[#052f4f]">
            <div className="flex flex-col items-center gap-1 animate-fadeInSlow transition-all hover:scale-110 hover:-translate-y-1">
              <SiReact className="text-4xl" />
              <span className="text-sm font-medium">React</span>
            </div>

            <div className="flex flex-col items-center gap-1 animate-fadeInSlow transition-all delay-75 hover:scale-110 hover:-translate-y-1">
              <SiNextdotjs className="text-4xl" />
              <span className="text-sm font-medium">Next.js</span>
            </div>

            <div className="flex flex-col items-center gap-1 animate-fadeInSlow transition-all delay-75 hover:scale-110 hover:-translate-y-1">
              <SiTailwindcss className="text-4xl" />
              <span className="text-sm font-medium">Tailwind</span>
            </div>

            <div className="flex flex-col items-center gap-1 animate-fadeInSlow transition-all delay-75 hover:scale-110 hover:-translate-y-1">
              <SiTypescript className="text-4xl" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>

            <div className="flex flex-col items-center gap-1 animate-fadeInSlow transition-all delay-75 hover:scale-110 hover:-translate-y-1">
              <SiFirebase className="text-4xl" />
              <span className="text-sm font-medium">Firebase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="mb-12 md:mb-0 animate-fadeInSlow">
        <div className="w-80 h-80 md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden shadow-2xl border-4 border-[#052f4f]/20">
          <img
            src="/hero-images/hero-photo.jpeg"
            alt="Edward"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
