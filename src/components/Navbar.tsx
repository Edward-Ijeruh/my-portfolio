import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="sticky top-0 z-60 shadow-md bg-[#f8f1de]"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Edward.dev Logo"
            className="w-8 h-auto object-contain"
          />
          <span className="font-bold text-xl text-[#052f4f]">
            Edward Ijeruh
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-[#052f4f] transition 
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#052f4f] after:transition-all
                  hover:after:w-full
                  ${isActive ? "after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Hire Me button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex relative overflow-hidden px-6 py-2 rounded-xl border-2 border-[#052f4f] bg-[#052f4f] text-white transition-all duration-300 ease-out group"
        >
          <span className="relative z-10 group-hover:text-[#052f4f] transition-colors duration-300">
            Hire Me
          </span>

          <span className="absolute inset-0 bg-[#f8f1de] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        </Link>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-2xl text-[#052f4f]"
          onClick={() => setOpen(true)}
          aria-label="Mobile Menu Button"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-2/3 bg-[#f8f1de] shadow-xl z-40 px-8 py-16 flex flex-col gap-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-[#052f4f] text-2xl"
              aria-label="Close Mobile Menu"
            >
              <FiX />
            </button>

            {/* Mobile Links */}
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg text-[#052f4f] relative transition 
                    after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#052f4f] after:transition-all
                    hover:after:w-full
                    ${isActive ? "after:w-1/4" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Hire Me button */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 bg-[#052f4f] text-white px-5 py-2 rounded-lg text-center"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
