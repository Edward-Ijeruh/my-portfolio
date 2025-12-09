import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface AppProps {
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8f1de] text-[#052f4f] font-poppins antialiased">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default App;
