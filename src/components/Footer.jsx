import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#04121c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Kheng Phet
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer building modern, fast, and scalable web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
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

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          © {year} Kheng Phet. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
