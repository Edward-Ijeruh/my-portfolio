import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const AboutPage: React.FC = () => {
  return (
    <main
      className="max-w-7xl mx-auto px-6 py-6 md:px-16 md:py-20"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Intro */}
      <section className="flex flex-col md:flex-row items-center gap-14 mb-20">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-semibold text-[#052f4f] mb-6">
            About Me
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I'm Edward, a Frontend Developer passionate about building clean,
            responsive, and interactive digital experiences. I love transforming
            UI ideas into real, functional web interfaces using modern tools
            like React, Next.js, and Tailwind CSS.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Beyond writing efficient code, I strive to create UIs that feel
            smooth, intuitive, and delightful to use.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#052f4f]/20">
            <img
              src="/hero-images/hero-photo.jpeg"
              alt="Edward"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-[#052f4f] mb-10 text-center">
          Education
        </h2>

        <div className="relative border-l-4 border-[#052f4f] pl-6 space-y-12 max-w-4xl mx-auto">
          <div className="relative">
            <h3 className="text-2xl font-bold text-[#052f4f]">
              Afe Babalola University, Ado Ekiti
            </h3>
            <p className="text-gray-700 font-medium">B.Sc., Computer Science</p>

            <ul className="mt-4 text-gray-700 leading-relaxed space-y-2">
              <li>• Graduated with Second Class Upper Division.</li>
              <li>
                • Coursework included software development, algorithms, and
                systems design.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-[#052f4f] mb-10 text-center">
          Tech Stack
        </h2>

        <div className="grid grid-cols-3 gap-8 md:grid-cols-5 md:gap-12 text-[#052f4f] max-w-4xl mx-auto">
          {[
            { icon: SiReact, label: "React" },
            { icon: SiNextdotjs, label: "Next.js" },
            { icon: SiTailwindcss, label: "Tailwind" },
            { icon: SiTypescript, label: "TypeScript" },
            { icon: SiFirebase, label: "Firebase" },
          ].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <Icon className="text-4xl" />
                <span className="text-sm font-medium">{tech.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-3xl font-semibold text-[#052f4f] mb-12 text-center">
          Work Experience
        </h2>

        <div className="border-l-4 border-[#052f4f] pl-6 space-y-14 max-w-4xl mx-auto">
          {[
            {
              role: "Frontend Developer",
              company: "LanderCraft Technologies",
              period: "May 2025 – Nov 2025",
              location: "Remote",
              bullets: [
                "Developed responsive, modern interfaces using React and JavaScript.",
                "Enhanced accessibility using UX and WCAG principles.",
                "Diagnosed UI bugs and performance issues.",
                "Collaborated with Git workflows and code reviews.",
              ],
            },
            {
              role: "Frontend Developer Intern",
              company: "Cinfores Limited",
              period: "Jul 2021 – Sep 2022",
              location: "Rivers, Nigeria",
              bullets: [
                "Built scalable and cross-browser friendly interfaces.",
                "Performed testing, debugging, and performance optimization.",
                "Integrated reusable UI components to improve usability.",
              ],
            },
            {
              role: "Business Applications Contributor",
              company: "Ibadan Electricity Distribution Company",
              period: "Jan 2024 – Oct 2024",
              location: "Oyo, Nigeria",
              bullets: [
                "Contributed to internal business software development.",
                "Improved operational efficiency through UI enhancements.",
                "Assisted backend teams with API integration.",
              ],
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-[#052f4f]">{exp.role}</h3>
              <p className="text-gray-700 font-semibold">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-600 text-sm mb-4">{exp.period}</p>

              <ul className="text-gray-700 space-y-2 leading-relaxed">
                {exp.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
