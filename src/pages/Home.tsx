import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVite,
  SiReactquery,
  SiSanity,
  SiFramer,
  SiGit,
  SiBrevo,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    title: "NIDF",
    description:
      "A Chapel Hill Denham owned project that provides a modern digital platform for Nigeria's infrastructure investment fund.",
    tech: ["React", "TypeScript", "Tailwind", "Sanity"],
    image: "/project-images/nidf-website-preview.webp",
    link: "https://nidf.ng/",
  },
  {
    number: "02",
    title: "InvestNaija",
    description:
      "A Chapel Hill Denham owned project that provides a platform for investing in Nigerian businesses.",
    tech: ["React", "Tailwind"],
    image: "/project-images/investnaija-website-preview.webp",
    link: "https://investnaija.com/",
  },
  {
    number: "03",
    title: "FilmHorizon",
    description:
      "A cinematic discovery platform for exploring movies, information and reviews.",
    tech: ["React", "TMDB API", "Tailwind"],
    image: "/project-images/filmhorizon-sc-v3.png",
    link: "https://filmhorizonn.netlify.app/",
  },
  {
    number: "04",
    title: "EchoMind",
    description:
      "A modern authenticated blogging platform where users can create, edit and manage posts.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    image: "/project-images/echomind-sc-v2.png",
    link: "https://echo-mindd.netlify.app/",
  },
];

const experiences = [
  {
    period: "November 2025 - Present",
    role: "Principal Engineer",
    company: "Liora",
    location: "Remote",
    description:
      "Leading the design and development of production-grade digital platforms for investment and financial services, architecting responsive React applications, integrating CMS technology and driving projects from implementation through testing, SEO and deployment.",
  },
  {
    period: "April 2025 - November 2025",
    role: "Frontend Developer",
    company: "LanderCraft Technologies",
    location: "Remote",
    description:
      "Built responsive web applications, reusable interfaces and modern frontend experiences with React and TypeScript.",
  },
  {
    period: "Jan 2024 - Oct 2024",
    role: "Business Applications Contributor",
    company: "Ibadan Electricity Distribution Company",
    location: "Oyo, Nigeria",
    description:
      "Supported internal business applications, UI improvements, API integrations, documentation and user-focused technical initiatives.",
  },
  {
    period: "Jul 2021 - Sep 2022",
    role: "Frontend Developer Intern",
    company: "Cinfores Limited",
    location: "Rivers, Nigeria",
    description:
      "Worked on responsive interfaces, frontend features, testing, debugging and cross-browser compatibility.",
  },
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Sanity", icon: SiSanity },
  { name: "Firebase", icon: SiFirebase },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Brevo", icon: SiBrevo },
  { name: "Git", icon: SiGit },
  { name: "Vite", icon: SiVite },
];

const Home: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm font-medium mb-6">
              Web Engineer · Nigeria
            </p>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] font-bold tracking-[-0.06em]">
              I build
              <br />
              <span className="text-[#052f4f]/45">for the</span>
              <br />
              real world.
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-[#052f4f]/70 leading-relaxed">
              I'm Edward, a Web Engineer with 3+ years of experience building
              and shipping production web applications. I turn ideas and
              requirements into reliable digital products.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="group flex items-center gap-3 bg-[#052f4f] text-[#f8f1de] px-6 py-3.5 rounded-full"
              >
                See my work
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#052f4f] px-6 py-3.5 rounded-full hover:bg-[#052f4f] hover:text-[#f8f1de] transition-colors"
              >
                View CV
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] md:w-[390px] lg:w-[430px]">
              {/* Vertical name */}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:block absolute z-0 -right-12 md:-right-16 top-1/2 -translate-y-1/2 text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-bold tracking-[-0.08em] text-[#052f4f]/10 [writing-mode:vertical-rl] leading-none select-none"
              >
                EDWARD
              </motion.span>

              {/* Organic photo */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 overflow-hidden w-full aspect-[4/5] bg-[#052f4f] rounded-[52%_48%_42%_58%/38%_45%_55%_62%]"
              >
                <motion.img
                  src="/hero-images/hero-photo.jpeg"
                  alt="Edward Ijeruh"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.04 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* <div className="hidden md:flex mt-16 md:mt-20 border-t border-[#052f4f]/20 pt-6 flex-col items-center justify-center gap-3">
          <span className="text-md uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </div> */}
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y-2 border-[#052f4f] py-6">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center">
              {[
                "Frontend Development",
                "UI Engineering",
                "Thoughtful Interfaces",
                "Creative Problem Solving",
                "Interactive Experiences",
                "Digital Experiences",
              ].map((item, itemIndex) => (
                <React.Fragment key={`${index}-${item}`}>
                  <span
                    className={`mx-6 md:mx-10 text-3xl md:text-5xl font-semibold tracking-[-0.04em] ${
                      itemIndex % 2 === 1 ? "text-[#052f4f]/35" : ""
                    }`}
                  >
                    {item}
                  </span>

                  <span className="text-xl md:text-2xl font-light">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm mb-4">
              Selected work
            </p>

            <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em]">
              Things I've
              <br />
              <span className="text-[#052f4f]/40">built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-[#052f4f]/65 leading-relaxed">
            A selection of projects where design, development and problem
            solving come together.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-5 items-start">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5">
            {/* NIDF */}
            <motion.a
              href={projects[0].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[380px] overflow-hidden rounded-3xl bg-[#052f4f]"
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f4f] via-[#052f4f]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f8f1de]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1de]/60">
                  Project
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      {projects[0].title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#f8f1de]/65">
                      {projects[0].description}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>

            {/* UI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[220px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <div className="text-7xl font-bold tracking-[-0.1em]">UI</div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  Made to feel good.
                </h3>

                <p className="mt-2 text-sm text-[#f8f1de]/55 leading-relaxed">
                  Clean structure, clear hierarchy and meaningful details.
                </p>
              </div>
            </motion.div>

            {/* FILMHORIZON */}
            <motion.a
              href={projects[2].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[330px] overflow-hidden rounded-3xl bg-[#052f4f]"
            >
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f4f] via-[#052f4f]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f8f1de]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1de]/60">
                  Project
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      {projects[2].title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#f8f1de]/65">
                      {projects[2].description}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5">
            {/* THOUGHTFUL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[180px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <span className="text-5xl font-bold tracking-[-0.08em]">01</span>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  Thoughtful by default.
                </h3>

                <p className="mt-2 text-sm text-[#f8f1de]/55">
                  Every interaction should have a reason.
                </p>
              </div>
            </motion.div>

            {/* INVESTNAIJA */}
            <motion.a
              href={projects[1].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[350px] overflow-hidden rounded-3xl bg-[#052f4f]"
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f4f] via-[#052f4f]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f8f1de]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1de]/60">
                  Project
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      {projects[1].title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#f8f1de]/65">
                      {projects[1].description}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>

            {/* RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[190px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#f8f1de]" />
                <span className="h-3 w-3 rounded-full bg-[#f8f1de]/50" />
                <span className="h-3 w-3 rounded-full bg-[#f8f1de]/20" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  Responsive by nature.
                </h3>

                <p className="mt-2 text-sm text-[#f8f1de]/55">
                  Interfaces that work beautifully wherever they are viewed.
                </p>
              </div>
            </motion.div>

            {/* PROCESS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[210px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <div className="text-4xl font-semibold tracking-[-0.06em]">
                Design
                <br />
                <span className="text-[#f8f1de]/40">→ Build →</span>
                <br />
                Refine.
              </div>

              <p className="text-sm text-[#f8f1de]/55 leading-relaxed">
                From first idea to polished interface.
              </p>
            </motion.div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5">
            {/* UX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[180px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <div className="text-7xl font-bold tracking-[-0.1em]">UX</div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  Built for people.
                </h3>

                <p className="mt-2 text-sm text-[#f8f1de]/55">
                  Technology is only useful when the experience makes sense.
                </p>
              </div>
            </motion.div>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[170px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <span className="text-6xl font-bold tracking-[-0.08em]">
                100%
              </span>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  Details matter.
                </h3>

                <p className="mt-2 text-sm text-[#f8f1de]/55">
                  The small things are often what people remember.
                </p>
              </div>
            </motion.div>

            {/* ECHOMIND */}
            <motion.a
              href={projects[3].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[350px] overflow-hidden rounded-3xl bg-[#052f4f]"
            >
              <img
                src={projects[3].image}
                alt={projects[3].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f4f] via-[#052f4f]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f8f1de]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1de]/60">
                  Project
                </p>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      {projects[3].title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#f8f1de]/65">
                      {projects[3].description}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>

            {/* CRAFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[140px] rounded-3xl bg-[#052f4f] text-[#f8f1de] p-7 flex flex-col justify-between"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#f8f1de]/50">
                The craft
              </span>

              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                Less noise.
                <br />
                More intention.
              </h3>
            </motion.div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-4">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-[380px] w-full overflow-hidden rounded-3xl bg-[#052f4f]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f4f] via-[#052f4f]/60 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-[#f8f1de]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f8f1de]/60">
                      Project
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-[85%] text-sm leading-relaxed text-[#f8f1de]/65">
                      {project.description}
                    </p>
                  </div>

                  <FiArrowUpRight className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#052f4f] text-[#f8f1de] py-28 md:py-36"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-[#f8f1de]/60">
                About me
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.04em]">
                I turn
                <br />
                <span className="text-[#f8f1de]/45">complex problems</span>
                <br />
                into useful software.
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12 text-[#f8f1de]/70 leading-relaxed">
                <p>
                  I'm Edward, a Web Engineer with a background in building
                  production web applications and digital products. My work
                  spans frontend architecture, reusable components, API
                  integrations, authentication flows, and CMS-powered platforms.
                </p>

                <p>
                  I care about more than getting an interface to work. I focus
                  on making applications responsive, maintainable, accessible,
                  and intuitive, while considering performance and the needs of
                  the people using them. I enjoy collaborating with product,
                  design, and engineering teams to turn requirements into
                  reliable solutions.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-[#f8f1de]/20">
                <p className="text-sm uppercase tracking-[0.2em] text-[#f8f1de]/50 mb-6">
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-5">
                  {technologies.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 text-lg"
                      >
                        <Icon />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36"
      >
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm mb-4">
              Experience
            </p>

            <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.05em]">
              Where I've
              <br />
              <span className="text-[#052f4f]/40">worked.</span>
            </h2>
          </div>

          <div>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-[#052f4f]/20 py-8 grid md:grid-cols-[170px_1fr] gap-5"
              >
                <p className="text-sm text-[#052f4f]/55">{experience.period}</p>

                <div>
                  <h3 className="text-2xl font-semibold">{experience.role}</h3>

                  <p className="mt-1 font-medium">{experience.company}</p>

                  <p className="mt-1 text-sm text-[#052f4f]/50">
                    {experience.location}
                  </p>

                  <p className="mt-5 text-[#052f4f]/65 leading-relaxed max-w-xl">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-28">
        <div className="border-t border-[#052f4f]/20 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#052f4f]/50">
              Education
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              B.Sc. Computer Science
            </h3>
          </div>

          <p className="text-[#052f4f]/60">
            Afe Babalola University, Ado Ekiti · Second Class Upper
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#052f4f] text-[#f8f1de] py-28 md:py-40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="uppercase tracking-[0.25em] text-sm text-[#f8f1de]/50 mb-8">
            Have a project in mind?
          </p>

          <h2 className="text-[clamp(3.5rem,9vw,9rem)] leading-[0.85] tracking-[-0.07em] font-bold">
            Let's build
            <br />
            <span className="text-[#f8f1de]/40">something.</span>
          </h2>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="mailto:ijeruh20@gmail.com"
              className="flex items-center gap-3 bg-[#f8f1de] text-[#052f4f] px-6 py-4 rounded-full font-medium"
            >
              <FiMail />
              Send me an email
            </a>

            <a
              href="https://wa.me/2349056599271"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#f8f1de]/40 px-6 py-4 rounded-full hover:bg-[#f8f1de] hover:text-[#052f4f] transition-colors"
            >
              <FiMessageCircle />
              WhatsApp
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-[#f8f1de]/20 flex flex-col md:flex-row justify-between gap-5">
            <p className="text-[#f8f1de]/50">
              Usually responds within a few minutes.
            </p>

            <div className="flex gap-5">
              <a
                href="https://github.com/Edward-Ijeruh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-white transition-colors"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/edward-ijeruh-074a2a322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/edwardijeruh?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-white transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
