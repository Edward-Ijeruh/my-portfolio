import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052f4f] text-[#f8f1de] px-6 md:px-10 pb-8">
      <div className="max-w-7xl mx-auto border-t border-[#f8f1de]/20 pt-8 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#f8f1de]/45">
        <p>© {new Date().getFullYear()} Edward Ijeruh.</p>

        <p>Designed & built by Edward.</p>
      </div>
    </footer>
  );
};

export default Footer;
