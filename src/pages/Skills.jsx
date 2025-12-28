import React from "react";

const skills = [
    { name: "HTML", percent: 90, color: "text-orange-500" },
    { name: "CSS", percent: 90, color: "text-blue-600" },
    { name: "JavaScript", percent: 65, color: "text-yellow-500" },
    { name: "React", percent: 70, color: "text-sky-400" },
    { name: "Node.js", percent: 65, color: "text-green-600" },
    { name: "PHP", percent: 75, color: "text-indigo-500" },
    { name: "Laravel", percent: 75, color: "text-red-600" },
    { name: "Express js", percent: 65, color: "text-gray-500" },
]

const SkillBar = ({ name, percent }) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      <div className="flex justify-between text-sm font-medium">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#061826] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

      </div>
    </section>
    );
};

export default Skills;
