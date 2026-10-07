import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#f8f1de]/90 backdrop-blur-md border-b border-[#052f4f]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }}
            className="flex items-center gap-2"
          >
            <img src="/logo.png" alt="Edward.dev" className="w-8 h-auto" />

            <span className="font-bold text-lg md:text-xl">Edward Ijeruh</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[#052f4f] after:transition-all ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => scrollTo("#contact")}
              className="group flex items-center gap-2 bg-[#052f4f] text-[#f8f1de] px-5 py-2.5 rounded-full"
            >
              Let's Talk
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[9998] bg-[#052f4f]/70"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 z-[9999] h-screen w-[85%] max-w-sm bg-[#052f4f] text-[#f8f1de] p-8 shadow-2xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-2xl"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              <div className="flex flex-col gap-8 mt-20">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className={`text-3xl font-semibold text-left transition-opacity ${
                        isActive ? "text-[#f8f1de]" : "text-[#f8f1de]/50"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}

                <button
                  onClick={() => scrollTo("#contact")}
                  className="mt-4 bg-[#f8f1de] text-[#052f4f] px-6 py-4 rounded-xl text-lg"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
