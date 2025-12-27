import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/30 backdrop-blur-md"
    }`;

  const logoClasses = `text-xl font-semibold transition-colors duration-500 ${scrolled ? "text-yellow-400" : "text-white"
    }`;

  const navItemClasses = `cursor-pointer transition-colors duration-300 ${scrolled ? "text-blue-400 hover:text-white" : "text-white hover:text-blue-400"
    }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <div className={logoClasses}>
          KHENG PHET
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 font-medium">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "SKILLS", path: "/skills" },
              { name: "PROJECTS", path: "/projects" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path} 
                  className={({ isActive }) =>
                    `cursor-pointer ${isActive ? "underline text-yellow-400" : "text-white"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navigations;
