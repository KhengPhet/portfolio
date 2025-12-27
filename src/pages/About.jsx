import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#061826] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I'm <span className="text-cyan-400">Kheng Phet</span>,
              <br />Full Stack Developer
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer with experience building
              modern, responsive, and scalable web applications. I enjoy turning
              complex problems into clean, efficient solutions using modern
              technologies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              My main focus is creating fast, user-friendly applications using
              React, Node.js, and modern tools. I continuously learn new
              technologies to improve my skills and deliver high-quality
              software.
            </p>

            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-md font-medium transition">
              Download CV
            </button>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Years Experience", value: "1+" },
              { title: "Projects Completed", value: "10+" },
              { title: "Technologies", value: "5+" },
              { title: "Passion", value: "100%" },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-cyan-500/30 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-3xl font-bold text-cyan-400">{item.value}</h4>
                <p className="text-gray-300 mt-2">{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
