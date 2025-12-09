import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";

const projectsDB = [
  {
    title: "TasteHaven",
    description:
      "A fast-food ordering site with cart functionality and Paystack payment integration",
    tech: ["React", "Tailwind", "Paystack", "Firebase"],
    link: "https://tastehavenn.netlify.app/",
    img: "/project-images/tastehaven-sc.png",
  },
  {
    title: "FilmHorizon",
    description: "A platform to explore movie information and film reviews",
    tech: ["React", "TMBD API", "Tailwind"],
    link: "https://filmhorizonn.netlify.app/",
    img: "/project-images/filmhorizon-sc-v3.png",
  },
  {
    title: "EchoMind",
    description:
      "A user-authenticated blogging platform where users can create, edit and manage posts",
    tech: ["Next.js", "Firebase", "Tailwind"],
    link: "https://echo-mindd.netlify.app/",
    img: "/project-images/echomind-sc-v2.png",
  },
];

const Projects: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const techOptions = ["All", "React", "Next.js"];

  const techIcons: Record<string, React.ReactNode> = {
    React: <SiReact className="text-xs" />,
    "Next.js": <SiNextdotjs className="text-xs" />,
    Tailwind: <SiTailwindcss className="text-xs" />,
    TypeScript: <SiTypescript className="text-xs" />,
    Firebase: <SiFirebase className="text-xs" />,
  };

  const filteredProjects = projectsDB.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || p.tech.includes(filter))
  );

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main
      className="max-w-7xl mx-auto px-6 py-6 md:px-16 md:py-16"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Header */}
      <h1 className="text-4xl text-center md:text-5xl font-semibold text-[#052f4f] mb-8">
        Projects
      </h1>
      <p className="text-center text-sm md:text-base text-[#052f4f] mb-8">
        Search projects or filter by technology used
      </p>

      {/* Search + Filter */}
      <div className="flex items-center justify-between gap-4 mb-12 relative">
        {/* Search */}
        <div className="relative w-[60%] md:w-[250px]">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-[#052f4f]" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-2 border-[#052f4f] rounded-2xl px-10 py-3 
                 placeholder-[#052f4f] focus:outline-none focus:border-[#052f4f] 
                 transition-all duration-300 hover:shadow-md"
          />
        </div>

        {/* Filter */}
        <div ref={filterRef} className="relative w-[200px]">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full flex justify-between items-center border-2 border-[#052f4f] 
                 rounded-2xl px-4 py-3 bg-[#f8f1de] text-[#052f4f] 
                 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <FiFilter />
              <span>{filter || "Filter"}</span>
            </div>
            <FiChevronDown />
          </button>

          {filterOpen && (
            <div
              className="absolute top-full mt-2 w-full bg-[#f8f1de] border-2 
                      border-[#052f4f] shadow-lg z-50 rounded-xl"
            >
              {techOptions.map((tech) => (
                <div
                  key={tech}
                  onClick={() => {
                    setFilter(tech === "All" ? "" : tech);
                    setFilterOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-[#052f4f] 
                       hover:text-[#f8f1de] transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group border-2 border-transparent transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#052f4f] group-hover:bg-[#f8f1de] transition-colors duration-500 rounded-xl z-10" />
            <span className="absolute inset-0 bg-[#f8f1de] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-2xl z-10" />

            {/* Image */}
            <div className="relative w-full h-46 z-20">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative p-6 z-30">
              <h2 className="text-white group-hover:text-[#052f4f] text-2xl font-bold mb-2 transition-colors duration-500 flex items-center gap-2">
                {project.title}
              </h2>
              <p className="text-gray-200 group-hover:text-[#052f4f] mb-4 transition-colors duration-500">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white text-[#052f4f] group-hover:bg-[#052f4f] group-hover:text-[#f8f1de] px-2 py-1 rounded-full font-medium transition-colors duration-500 flex items-center gap-1"
                  >
                    {techIcons[tech]}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover border */}
            <span className="absolute inset-0 border-2 border-[#052f4f] opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 z-30" />
          </motion.a>
        ))}
      </div>
    </main>
  );
};

export default Projects;
