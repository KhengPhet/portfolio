import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React and Tailwind CSS showcasing my skills and projects.",
    image: "portfolio.png",
    tech: ["React", "Tailwind CSS"],
    live: "https://portfolio-hzb2.vercel.app",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description:
      "Full stack e-commerce application with authentication, product management, and payments.",
    image: "/projects/project2.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin dashboard with charts, user management, and role-based access.",
    image: "/projects/project3.png",
    tech: ["React", "Chart.js", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#061826] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on, using modern web
            technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400 transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
