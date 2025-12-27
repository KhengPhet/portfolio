import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showRole, setShowRole] = useState(false);

  return (
    <section className="min-h-screen bg-[#061826] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              <ReactTyped
                strings={["Kheng Phet"]}
                typeSpeed={80}
                showCursor={false}
                onComplete={() => setShowRole(true)}
              />
            </span>
          </h1>

          {showRole && (
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
              <ReactTyped
                strings={[
                  "Front End Stack Developer",
                  "Back End Developer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}
                loop
                showCursor={false}
              />
            </h2>
          )}

          <p className="text-gray-300 max-w-lg mb-8">
            I build modern, fast, and scalable web applications using
            React, Node.js, and modern technologies.
          </p>

          <div className="flex gap-4 mb-10">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-md font-medium transition">
              Hire Me
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-md font-medium transition">
              Let's Talk
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black transition border-none"
            >
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black transition border-none"
            >
              <img src="/telegram.png" alt="Telegram" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-100 h-100 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

          <img
            src="person.png"
            alt="Kheng Phet"
            className="relative z-10 w-100 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
