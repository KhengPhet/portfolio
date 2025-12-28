import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navigations = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-500
    ${scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/30 backdrop-blur-md"}
  `;

  const navLinkClass = ({ isActive }) =>
    `block py-2 transition ${
      isActive
        ? "text-yellow-400 underline"
        : "text-white hover:text-blue-400"
    }`;

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div
          className={`text-xl font-semibold transition-colors ${
            scrolled ? "text-yellow-400" : "text-white"
          }`}
        >
          KHENG PHET
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className={navLinkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="bg-gray-900 px-6 pb-6 space-y-4 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigations;
